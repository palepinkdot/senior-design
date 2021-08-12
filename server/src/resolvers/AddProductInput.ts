import { Field, InputType } from "type-graphql";

@InputType()
export class AddProductInput {
  @Field()
  sku: string;
  @Field()
  name: string;
  @Field()
  price: string;
  @Field()
  imageUrl: string;
}
