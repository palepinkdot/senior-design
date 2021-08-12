import { Field, InputType } from "type-graphql";

@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  verifypassword: string;
  @Field()
  firstname: string;
  @Field()
  lastname: string;
}
