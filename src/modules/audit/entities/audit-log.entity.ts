import { User } from "src/modules/users/entities/user.entity";
import { Resource } from "src/modules/resource/entities/resource.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Resource, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'resource_id', })
  resource: Resource;

  @Column({ nullable: true, type: 'jsonb' })
  metadata: Record<string, any> | null;

  @Column({ nullable: false, name: 'ip_address' })
  ipAddress: string;

  @Column({ nullable: false, name: 'user_agent' })
  userAgent: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;
}