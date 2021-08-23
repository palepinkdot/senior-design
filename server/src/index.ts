import "reflect-metadata";
import { COOKIE_NAME, __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types";
import cors from "cors";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { graphqlUploadExpress } from "graphql-upload";

const main = async () => {
  console.log("🐾 Starting find-a-pet backend...");
  const conn = await createConnection({
    type: "postgres",
    host: "postgres.maxg.xyz",
    database: "sd-dev",
    username: "postgres",
    password: "mesutozil",
    logging: true,
    synchronize: true,
    entities: [User],
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret:
        "845688fb29145b48a8bb110f32b88f133dd6a8a5e731768cfd91c0fda09a26e7",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res, redis }),
    uploads: false,
  });

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(4000, () => {
    console.log("🚀 server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
