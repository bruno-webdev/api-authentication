import { AuditLog } from "src/modules/audit/entities/audit-log.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('resources')
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @OneToMany(() => AuditLog, (auditLog) => auditLog.resource, { nullable: true })
  auditLogs: AuditLog[];
}