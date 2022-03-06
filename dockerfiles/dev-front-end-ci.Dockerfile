# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN ls -a
COPY web/package.json web/yarn.lock ./web/
COPY server/package.json server/yarn.lock ./server/
RUN cd web && yarn install --frozen-lockfile
RUN cd ..
RUN cd server && yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
RUN echo $(ls -1 /app)
COPY web ./web
COPY server ./server
RUN ls -a
RUN pwd
COPY --from=deps /app/web/node_modules ./web/node_modules
COPY --from=deps /app/server/node_modules ./server/node_modules
RUN pwd
RUN cd server && yarn build 
RUN cd ..
RUN cd web && yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app/web
RUN echo $(ls -1 /app)

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/web/.next ./web/.next
COPY --from=builder /app/web/node_modules ./web/node_modules
COPY --from=builder /app/web/package.json ./web/package.json

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]