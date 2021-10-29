import { Animal } from "../entities/Animal";
import { Field, ObjectType, Query, Resolver } from "type-graphql";

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
}
