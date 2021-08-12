import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field()
  @Column()
  @Generated("uuid")
  id!: string;

  @Field()
  @PrimaryColumn({ unique: true })
  sku!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ nullable: true })
  imageUrl: string;

  @Field()
  @Column({ type: "float" })
  price!: number;
}
