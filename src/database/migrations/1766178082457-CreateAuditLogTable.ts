import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

/* 

@PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Resource, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'resource_id' })
  resource: Resource;

  @Column({ nullable: true, type: 'jsonb' })
  metadata: Record<string, any> | null;

  @Column({ nullable: false, name: 'ip_address' })
  ipAddress: string;

  @Column({ nullable: false, name: 'user_agent' })
  userAgent: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

*/

export class CreateAuditLogTable1766178082457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'audit_logs',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'user_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'resource_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'metadata',
          type: 'jsonb',
          isNullable: true,
        },
        {
          name: 'ip_address',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'user_agent',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: 'fk_audit_logs_user_id',
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        {
          name: 'fk_audit_logs_resource_id',
          columnNames: ['resource_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'resources',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      ],
    }));

    await queryRunner.createIndex('audit_logs', new TableIndex({
      columnNames: ['ip_address'],
      isUnique: false,
      name: 'idx_audit_logs_ip_address',
    }));

    await queryRunner.createIndex('audit_logs', new TableIndex({
      columnNames: ['user_agent'],
      isUnique: false,
      name: 'idx_audit_logs_user_agent',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('audit_logs', 'idx_audit_logs_ip_address');
    await queryRunner.dropIndex('audit_logs', 'idx_audit_logs_user_agent');
    await queryRunner.dropTable('audit_logs');
  }
}
