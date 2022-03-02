import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Org } from "./Org";
@ObjectType()
@Entity()
export class Animal extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  orgId!: string;

  // @Field(() => String)
  // @ManyToOne(() => Org, (org) => org.animals)
  // org!: Org;

  @Field()
  @Column()
  type!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  imageURL!: string;

  @Field()
  @Column()
  breed!: string;

  @Field()
  @Column()
  cost!: number;

  @Field()
  @Column()
  size!: string;

  @Field()
  @Column()
  vaccines!: string;

  @Field()
  @Column()
  goodToKnow!: string;

  @Field()
  @Column()
  agencyEmail!: string;

  @Field()
  @Column({ default: 0 })
  totalLikes!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
