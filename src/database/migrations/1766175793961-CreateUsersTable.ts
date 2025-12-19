import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateUsersTable1766175793961 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'username',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'password',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'role',
          type: 'enum',
          enum: ['super', 'admin', 'moderator', 'user'],
          default: `'user'`,
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'deleted_at',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    }));

    await queryRunner.createIndex('users', new TableIndex({
      columnNames: ['username', 'deleted_at'],
      isUnique: true,
      name: 'idx_users_username_deleted_at',
    }));

    await queryRunner.createIndex('users', new TableIndex({
      columnNames: ['email', 'deleted_at'],
      isUnique: true,
      name: 'idx_users_email_deleted_at',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('users', 'idx_users_username_deleted_at');
    await queryRunner.dropIndex('users', 'idx_users_email_deleted_at');
    await queryRunner.dropTable('users');
  }
}
