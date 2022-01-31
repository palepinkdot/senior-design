import { Match } from "../entities/Match";
import { Arg, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { getConnection, getConnectionOptions } from "typeorm";

@ObjectType()
class MatchFieldError {
	@Field()
	field: string;
	@Field()
	message: string;
}

@ObjectType()
class MatchResponse {
	@Field(() => [MatchFieldError], { nullable: true })
	errors?: MatchFieldError[];

	@Field(() => Match, { nullable: true })
	match?: Match;
}

@Resolver()
export class MatchResolver {
	@Query(() => String)
	helloMatch() {
		return "Hello from the Match resolver";
	}

	@Mutation(() => MatchResponse) async createMatch(@Arg("animalId") animalId: string, @Arg("userId") userId: string): Promise<MatchResponse> {
		let match;
		try {
			const result = await getConnection()
				.createQueryBuilder()
				.insert()
				.into(Match)
				.values({
					userId: userId,
					animalId: animalId,
				})
				.returning("*")
				.execute();
			match = result.raw[0];
		} catch (error) {
			return {
				errors: [
					{
						field: "username",
						message: "username already taken",
					},
				],
			};
		}
		return { match: match };
	}
}
