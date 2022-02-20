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
import { v4 } from "uuid";
import { getConnection } from "typeorm";
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

    @Field(() => Application, { nullable: true })
    application?: Application;
}

@Resolver()
export class ApplicationResolver {
    @Query(() => String)
    helloApplication() {
        return "hello world from application";
    }
    @Mutation(() => ApplicationResponse)
    async createApplication(@Arg("animalId") animalId: string,
                            @Arg("status") status: string, @Ctx() { req }: MyContext): Promise<ApplicationResponse> {
        console.log(req.session.userId);

        let application;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Application)
                .values({
                    animalId: animalId,
                    userId: req.session.userId,
                    status: status,
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

}
