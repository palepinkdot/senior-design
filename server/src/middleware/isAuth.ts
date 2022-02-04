import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
	if (!context.req.session.userId || !context.req.session.orgId) {
		throw new Error("Not Authenticatid!");
	}

	return next();
};
