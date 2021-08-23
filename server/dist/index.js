"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("./constants");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const user_1 = require("./resolvers/user");
const ioredis_1 = __importDefault(require("ioredis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Cart_1 = require("./entities/Cart");
const cart_1 = require("./resolvers/cart");
const Product_1 = require("./entities/Product");
const product_1 = require("./resolvers/product");
const graphql_upload_1 = require("graphql-upload");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🐾 Starting find-a-pet backend...");
    const conn = yield typeorm_1.createConnection({
        type: "postgres",
        host: "postgres.maxg.xyz",
        database: "sd-dev",
        username: "postgres",
        password: "mesutozil",
        logging: true,
        synchronize: true,
        entities: [User_1.User, Cart_1.Cart, Product_1.Product],
    });
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redis = new ioredis_1.default();
    app.use(cors_1.default({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    app.use(express_session_1.default({
        name: constants_1.COOKIE_NAME,
        store: new RedisStore({ client: redis, disableTouch: true }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "lax",
            secure: constants_1.__prod__,
        },
        saveUninitialized: false,
        secret: "845688fb29145b48a8bb110f32b88f133dd6a8a5e731768cfd91c0fda09a26e7",
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [hello_1.HelloResolver, user_1.UserResolver, cart_1.CartResolver, product_1.ProductResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, redis }),
        uploads: false,
    });
    app.use(graphql_upload_1.graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(4000, () => {
        console.log("🚀 server started on localhost:4000");
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map