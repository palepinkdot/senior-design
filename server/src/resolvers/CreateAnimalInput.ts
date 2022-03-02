import { Org } from "src/entities/Org";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAnimalInput {
  @Field()
  orgId!: string;

  @Field()
  type!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  imageURL!: string;

  @Field()
  breed!: string;

  @Field()
  cost!: number;

  @Field()
  size!: string;

  @Field()
  vaccines!: string;

  @Field()
  goodToKnow!: string;

  @Field()
  agencyEmail!: string;
}
