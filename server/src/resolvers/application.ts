import {
    Resolver,
    Mutation,
    Arg,
    Field,
    Ctx,
    ObjectType,
    Query, InputType,
} from "type-graphql";
import { MyContext } from "../types";
import { Org } from "../entities/Org";
import argon2 from "argon2";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { getConnection } from "typeorm";
import { OrgUsernamePasswordInput } from "./OrgUsernamePasswordInput";
import { validateRegisterOrg } from "../utils/validateRegisterOrg";
import {CreateAnimalInput} from "./CreateAnimalInput";
import {Application} from "../entities/Application";

@ObjectType()
class ApplicationFieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class ApplicationResponse {
    @Field(() => [ApplicationFieldError], { nullable: true })
    errors?: ApplicationFieldError[];

    @Field(() => Org, { nullable: true })
    application?: Application;
}

@Resolver()
export class ApplicationResolver {
    @Query(() => String)
    helloAnimal() {
        return "hello world from application";
    }
    @Mutation(() => ApplicationResponse)
    async createApplication(@Ctx() { req }: MyContext): Promise<ApplicationResponse> {
        console.log(req.session.userId);

        let application;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Application)
                .values({
                    animalId: Math.random().toString(),
                    userId: Math.random().toString(),
                    status: Math.random().toString(),
                })
                .returning("*")
                .execute();
            application = result.raw[0];
        } catch (err) {
            if (err.code === "22007") {
                return {
                    errors: [
                        {
                            field: "startDate",
                            message: "one of your dates is not valid",
                        },
                    ],
                };
            }
        }

        return { application: application };
    }


    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContext) {
        return new Promise((resolve) =>
            req.session.destroy((err) => {
                res.clearCookie(COOKIE_NAME);
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            })
        );
    }
}
