import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class CartItem extends BaseEntity {
  @Field() //UID for this cartitem
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field() //Product Id from Product
  @OneToOne(() => Product, (product) => product.id)
  productId: string;

  @Field() //Cart Id from cart
  @OneToOne(() => Cart, (cart) => cart.id)
  cartId: string;

  @Field() //Product sku from Product
  @OneToOne(() => Product, (product) => product.sku)
  productSku: string;

  @Field() //Product cost from Product
  @OneToOne(() => Product, (product) => product.price)
  unitCost: number;

  @Field()
  @Column()
  quantity: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
