import { Product } from "../entities/Product";
import { Arg, Field, Mutation, ObjectType, Query } from "type-graphql";
import { getConnection } from "typeorm";
import { AddProductInput } from "./AddProductInput";
@ObjectType()
class ProductError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class ProductResponse {
  @Field(() => [ProductError], { nullable: true })
  errors?: ProductError[];

  @Field(() => Product, { nullable: true })
  product?: Product;
}

// @ObjectType()
// class PaginatedProducts {
//   @Field(() => [Product])
//   posts: Product[];
//   @Field()
//   hasMore: boolean;
// }

export class ProductResolver {
  @Mutation(() => ProductResponse)
  async addProduct(
    @Arg("options") options: AddProductInput
  ): Promise<ProductResponse> {
    let product;
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Product)
        .values({
          sku: options.sku,
          name: options.name,
          price: parseFloat(options.price),
          imageUrl: options.imageUrl,
        })
        .returning("*")
        .execute();
      product = result.raw[0];
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "sku",
              message: "sku already exists",
            },
          ],
        };
      }
    }

    return { product };
  }

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return Product.find();
  }
}
