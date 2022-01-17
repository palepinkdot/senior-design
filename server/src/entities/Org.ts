import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Animal } from "./Animal";
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
  @Column({ default: "new" })
  attributes!: string;

  // @Field(() => String)
  // @OneToMany(() => Animal, (animal) => animal.org)
  // animals: Animal[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
