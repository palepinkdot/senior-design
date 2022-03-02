import { Field, InputType } from "type-graphql";

@InputType()
export class CreateApplicationInput {
    @Field()
    animalId!: string;

    @Field()
    status!: string;
}
