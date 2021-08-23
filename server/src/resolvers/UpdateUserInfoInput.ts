import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateUserInfoInput {
  @Field()
  userid: string;
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  avatarUrl: string;
  @Field()
  email: string;
}
