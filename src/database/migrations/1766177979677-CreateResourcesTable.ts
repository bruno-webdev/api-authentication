import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateResourcesTable1766177979677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'resources',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createIndex('resources', new TableIndex({
      columnNames: ['name'],
      isUnique: true,
      name: 'idx_resources_name',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('resources', 'idx_resources_name');
    await queryRunner.dropTable('resources');
  }
}
