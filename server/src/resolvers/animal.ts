import { Animal } from "../entities/Animal";
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver, UseMiddleware } from "type-graphql";
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
	@Mutation(() => Animal)
	@UseMiddleware(isAuth)
	async createPost(@Arg("input") input: AnimalInput, @Ctx() { req }: MyContext): Promise<Animal> {
		return Animal.create({
			...input,
			orgId: req.session.userId,
		}).save();
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
}
