import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Org } from "./Org";
@ObjectType()
@Entity()
export class Match extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	matchId!: string;

	@Field()
	@Column()
	animalId!: string;

	@Field()
	@Column()
	userId!: string;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
