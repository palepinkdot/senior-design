import { Field, InputType } from "type-graphql";

@InputType()
export class CreateApplicationInput {
    @Field()
    userId!: string;

    @Field()
    animalId!: string;

    @Field()
    status!: string;
}
