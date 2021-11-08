import { Animal } from "../entities/Animal";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "src/types";

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
  async createPost(
    @Arg("input") input: AnimalInput,
    @Ctx() { req }: MyContext
  ): Promise<Animal> {
    return Animal.create({
      ...input,
      orgId: req.session.userId,
    }).save();
  }
}
