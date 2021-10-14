import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1634181594267 implements MigrationInterface {
    name = 'Initial1634181594267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isOrg" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isOrg"`);
    }

}
