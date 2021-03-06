import {
    Resolver,
    Mutation,
    Arg,
    Field,
    Int,
    Ctx,
    ObjectType,
    Query, InputType,
} from "type-graphql";
import { MyContext } from "../types";
import { v4 } from "uuid";
import { getConnection } from "typeorm";
import {Application} from "../entities/Application";
import { CreateApplicationInput } from "./CreateApplicationInput";
import {Org} from "../entities/Org";
import { sendAdoptionRequest } from "../utils/sendGrid";


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
@ObjectType()
class PaginatedApplication {
	@Field(() => [Application])
	applications: Application[];
	@Field()
	hasMore: boolean;
}
@Resolver()
export class ApplicationResolver {
    @Query(() => String)
    helloApplication() {
        return "hello world from application";
    }

    @Query(() => PaginatedApplication)
	async applications(@Arg("userId", () => String) userId: string, @Arg("limit", () => Int) limit: number, @Arg("cursor", () => String, { nullable: true }) cursor: string | null): Promise<PaginatedApplication> {
		const realLimit = Math.min(50, limit);
		const reaLimitPlusOne = realLimit + 1;

		const replacements: any[] = [reaLimitPlusOne];

		if (cursor) {
			replacements.push(new Date(parseInt(cursor)));
		}

		const applications = await getConnection().query(
			`
    select a.*
    from application a
	where a."userId" = '${userId}'
    ${cursor ? `where a."createdAt" < $2` : ""}
    order by a."createdAt" DESC
    limit $1
    `,
			replacements
		);
		console.log(applications);
		return {
			applications: applications.slice(0, realLimit),
			hasMore: applications.length === reaLimitPlusOne,
		};
	}

    @Mutation(() => ApplicationResponse)
    async createApplication(@Arg("options") options: CreateApplicationInput, @Ctx() { req }: MyContext): Promise<ApplicationResponse> {
        console.log(req.session.userId);

        let application;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Application)
                .values({
                    animalId: options.animalId,
                    userId: req.session.userId,
                    status: options.status,
                })
                .returning("*")
                .execute();
            application = result.raw[0];

            console.log("about to send email")

            sendAdoptionRequest(options.agencyEmail);

            console.log("email sent")


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
    @Mutation(() => ApplicationResponse)
    async updateApplicationStatus(
        @Arg("applicationId") applicationId: string,
        @Arg("status") status: string,
        @Ctx() { req }: MyContext
    ): Promise<ApplicationResponse> {
        const updatedApplication = await Application.findOne({
            where: { id: applicationId },
        });


        let application;
        try {
            const result = await Application.update(
                { id: applicationId },
                {
                    status: status,
                }
            );
            application = result.raw[0];
        } catch (err) {
            if (err.code === "23505") {
                return {
                    errors: [
                        {
                            field: "status",
                            message: "application could not be updated",
                        },
                    ],
                };
            }
        }

        // log in user after change password
        req.session.orgId = updatedApplication?.id;

        return { application };
    }

    @Query(() => PaginatedApplication)
	async applicationPerShelter(@Arg("limit", () => Int) limit: number, @Arg("cursor", () => String, { nullable: true }) cursor: string | null, @Arg("animalIds", () => [String]) animalIds: [string]): Promise<PaginatedApplication> {
		const realLimit = Math.min(50, limit);
		const reaLimitPlusOne = realLimit + 1;

		const replacements: any[] = [reaLimitPlusOne];

		if (cursor) {
			replacements.push(new Date(parseInt(cursor)));
		}

		const applications = await getConnection().query(
			`
            select a.*
            from application a
            where a."animalId" IN ('${animalIds.join("','")}')
            order by a."createdAt" DESC
            limit $1
    `,
			replacements
		);
		console.log(applications);
		return {
			applications: applications.slice(0, realLimit),
			hasMore: applications.length === reaLimitPlusOne,
		};
	}
}
