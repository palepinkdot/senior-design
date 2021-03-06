import "reflect-metadata";
import "dotenv-safe/config";
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
import path from "path";
import { Org } from "./entities/Org";
import { OrgResolver } from "./resolvers/org";
import { Animal } from "./entities/Animal";
import { AnimalResolver } from "./resolvers/animal";
import { MatchResolver } from "./resolvers/match";
import { Match } from "./entities/Match";
import { Application } from "./entities/Application"
import {ApplicationResolver} from "./resolvers/application";

const main = async () => {
	console.log("🐾 Starting Swipet API...");
	const conn = await createConnection({
		type: "postgres",
		url: process.env.DATABASE_URL,
		logging: true,
		migrations: [path.join(__dirname, "./migrations/*")],
		entities: [User, Org, Animal, Match, Application],
		synchronize: true,
	});
	await conn.runMigrations();

	const app = express();

	const RedisStore = connectRedis(session);
	const redis = new Redis(process.env.REDIS_URL);
	app.set("trust proxy", 1);
	app.use(
		cors({
			origin: process.env.CORS_ORIGIN,
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
				domain: __prod__ ? "." + process.env.CORS_DOMAIN : undefined,
			},
			saveUninitialized: false,
			secret: process.env.SESSION_SECRET,
			resave: false,
		})
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver, UserResolver, OrgResolver, AnimalResolver, MatchResolver, ApplicationResolver],
			validate: false,
		}),
		context: ({ req, res }): MyContext => ({ req, res, redis }),
		uploads: false,
	});

	app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
	apolloServer.applyMiddleware({ app, cors: false });
	app.listen(parseInt(process.env.PORT), () => {
		console.log("🚀 Swipet API started on " + process.env.CORS_DOMAIN + ":" + process.env.PORT);
	});

	
};

main().catch((err) => {
	console.error(err);
});
