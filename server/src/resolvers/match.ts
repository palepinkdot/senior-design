import { Match } from "../entities/Match";
import { Arg, Field, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { getConnection, getConnectionOptions } from "typeorm";
import { match } from "assert";

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

@ObjectType()
class PaginatedMatch {
	@Field(() => [Match])
	matches: Match[];
	@Field()
	hasMore: boolean;
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

	@Query(() => PaginatedMatch)
	async matches(@Arg("userId", () => Int) userId: string, @Arg("limit", () => Int) limit: number, @Arg("cursor", () => String, { nullable: true }) cursor: string | null): Promise<PaginatedMatch> {
		const realLimit = Math.min(50, limit);
		const reaLimitPlusOne = realLimit + 1;

		const replacements: any[] = [reaLimitPlusOne];

		if (cursor) {
			replacements.push(new Date(parseInt(cursor)));
		}

		const matches = await getConnection().query(
			`
    select m.*
    from matches m
	where m."userId" == ${userId}
    ${cursor ? `where a."createdAt" < $2` : ""}
    order by a."createdAt" DESC
    limit $1
    `,
			replacements
		);
		console.log(matches);
		return {
			matches: matches.slice(0, realLimit),
			hasMore: matches.length === reaLimitPlusOne,
		};
	}
}
