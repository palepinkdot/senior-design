import { Animal } from "../entities/Animal";
import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "src/types";
import { CreateAnimalInput } from "./CreateAnimalInput";
import { getConnection } from "typeorm";
import { Org } from "src/entities/Org";

@InputType()
class AnimalInput {
	@Field()
	type: string;
	@Field()
	name: string;
	@Field()
	description: string;
	@Field()
	imageURL: string;
	@Field()
	breed: string;
	@Field()
	cost: number;
}
@ObjectType()
class AnimalFieldError {
	@Field()
	field: string;
	@Field()
	message: string;
}

@ObjectType()
class PaginatedAnimals {
	@Field(() => [Animal])
	animals: Animal[];
	@Field()
	hasMore: boolean;
}

@ObjectType()
class AnimalResponse {
	@Field(() => [AnimalFieldError], { nullable: true })
	errors?: AnimalFieldError[];

	@Field(() => Animal, { nullable: true })
	animal?: Animal;
}

@Resolver()
export class AnimalResolver {
	@Query(() => String)
	helloAnimal() {
		return "hello world from animals2";
	}
	@Mutation(() => AnimalResponse)
	async createAnimal(@Arg("options") options: CreateAnimalInput, @Ctx() { req }: MyContext): Promise<AnimalResponse> {
		console.log(req.session.orgId);
		console.log(req.session.userId);

		let animal;
		try {
			const newUserAvatar = "placeholder";
			const result = await getConnection()
				.createQueryBuilder()
				.insert()
				.into(Animal)
				.values({
					name: options.name,
					orgId: req.session.userId,
					type: options.breed,
					description: options.description,
					imageURL: options.imageURL,
					breed: options.breed,
					cost: options.cost,
				})
				.returning("*")
				.execute();
			animal = result.raw[0];
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

		return { animal: animal };
	}

	@Query(() => PaginatedAnimals)
	async animals(@Arg("limit", () => Int) limit: number, @Arg("cursor", () => String, { nullable: true }) cursor: string | null): Promise<PaginatedAnimals> {
		const realLimit = Math.min(50, limit);
		const reaLimitPlusOne = realLimit + 1;

		const replacements: any[] = [reaLimitPlusOne];

		if (cursor) {
			replacements.push(new Date(parseInt(cursor)));
		}

		const animals = await getConnection().query(
			`
    select a.*
    from animal a
    ${cursor ? `where a."createdAt" < $2` : ""}
    order by a."createdAt" DESC
    limit $1
    `,
			replacements
		);
		console.log(animals);
		return {
			animals: animals.slice(0, realLimit),
			hasMore: animals.length === reaLimitPlusOne,
		};
	}

	@Query(() => Int)
	async animalsPerShelter(@Arg("orgId") orgId: string) {
		const animals: number = await getConnection().query(
			`
    select count a.*
    from animal a
    where a."orgId" == ${orgId}
    `
		);
		console.log(animals);
		return animals;
	}

	@Query(() => Animal)
	async animalByID(@Arg("id", () => String) id: string) {
		const animal = await getConnection().createQueryBuilder()
															.select("animal")
															.from(Animal, "animal")
															.where("animal.id = :id", {id: id})
															.getOne();
		console.log(animal);
		return animal;
	}
}




