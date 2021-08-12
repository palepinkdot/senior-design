import { Cart } from "../entities/Cart";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import {
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";

@ObjectType()
class CartError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class CartResponse {
  @Field(() => [CartError], { nullable: true })
  errors?: CartError[];

  @Field(() => Cart, { nullable: true })
  cart?: Cart;
}

export class CartResolver {
  @Query(() => Cart, { nullable: true })
  @UseMiddleware(isAuth)
  cart(@Ctx() { req }: MyContext) {
    console.log("Trying to find cart for", req.session.userId);
    return Cart.findOne(req.session.userId);
  }

  @Mutation(() => CartResponse)
  @UseMiddleware(isAuth)
  async createCart(@Ctx() { req }: MyContext): Promise<CartResponse> {
    let cart;
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Cart)
        .values({
          id: req.session.userId,
        })
        .returning("*")
        .execute();
      cart = result.raw[0];
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "cart",
              message: `cart already generated`,
            },
          ],
        };
      }
    }

    return { cart };
  }
}
