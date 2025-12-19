import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNameToUsersTable1766180551216 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'name',
      type: 'varchar',
      isNullable: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'name');
  }
}
