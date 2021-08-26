FROM node:16.7

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package.json ./
COPY server/yarn.lock ./

RUN yarn

# Bundle app source
COPY . .
COPY server/.env.production .env

RUN yarn build

ENV NODE_ENV production

EXPOSE 7777
CMD [ "node", "dist/index.js" ]
USER node