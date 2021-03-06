import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Field()
	@Column({ unique: true })
	username!: string;

	@Field()
	@Column()
	firstname!: string;

	@Field()
	@Column()
	lastname!: string;

	@Field()
	@Column()
	avatarUrl: string;

	@Field(() => String)
	@Column()
	phone: string;

	@Field(() => String)
	@Column()
	zip: string;

	@Field()
	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@Field()
	@Column({ default: "new" })
	attributes!: string;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;

	@Column("text", { array: true, default: {} })
	savedAnimalIds: [];
}
