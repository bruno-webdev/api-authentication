import { AuditLog } from "src/modules/audit/entities/audit-log.entity";
import { RefreshToken } from "src/modules/auth/entities/refresh-token.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity('users')
@Unique(["username", "deletedAt"])
@Unique(["email", "deletedAt"])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  username: string;

  // Unique with deleted at
  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: "enum", enum: ["super", "admin", "moderator", "user"], default: "user" })
  role: "super" | "admin" | "moderator" | "user";

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ nullable: false, name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;

  @OneToMany(() => AuditLog, (auditLog) => auditLog.user, { nullable: true })
  auditLogs: AuditLog[];

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user, { nullable: true })
  refreshTokens: RefreshToken[];
}