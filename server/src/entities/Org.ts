import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@ObjectType()
@Entity()
export class Org extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column()
  orgName!: string;

  @Field()
  @Column()
  address!: string;

  @Field()
  @Column()
  contactFirstname!: string;

  @Field()
  @Column()
  contactLastname!: string;

  @Field()
  @Column()
  avatarUrl: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field()
  @Column({ default: true })
  firstLogin!: boolean;

  @Field()
  @Column()
  attributes!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
