import { Field, InputType } from "type-graphql";

@InputType()
export class OrgUsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  verifypassword: string;
  @Field()
  contactFirstname: string;
  @Field()
  contactLastname: string;
  @Field()
  address: string;
  @Field()
  orgName: string;
}
