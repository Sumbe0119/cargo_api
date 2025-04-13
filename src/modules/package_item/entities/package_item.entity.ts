import { CommonState, ItemStatus } from 'src/common/enum';
import { OrgMemberEntity } from 'src/modules/org_member/entities/org_member.entity';
import { Organization } from 'src/modules/organization/entities/organization.entity';
import { Warehouse } from 'src/modules/warehouse/entities/warehouse.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad
} from 'typeorm';


@Entity()
export class PackageItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrgMemberEntity, { nullable: false })
  @JoinColumn({ name: 'registered_by_id' })
  registeredBy: OrgMemberEntity;

  @ManyToOne(() => Warehouse, { nullable: false })
  @JoinColumn({ name: 'warehouse_id' })
  @Index()
  warehouse: Warehouse;

  @ManyToOne(() => Organization, { nullable: false })
  @JoinColumn({ name: 'organization_id' })
  @Index()
  organization: Organization;

  // Хэмжээсүүд (метр, кг)
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  height: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  width: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  weight: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  length: number;

  // Эзлэхүүн (автоматаар тооцоолох)
  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  volume: number;

  // Төлөв байдал
  @Column({
    type: 'enum',
    enum: ItemStatus,
    default: ItemStatus.REGISTERED
  })
  @Index()
  status: ItemStatus;

  @Column({
    type: 'enum',
    enum: CommonState,
    default: CommonState.ACTIVE
  })
  state: CommonState;

  // Хугацааны тэмдэглэлүүд
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'registered_at', nullable: true })
  registeredAt: Date;

  @Column({ name: 'received_at', nullable: true })
  receivedAt: Date;

  @Column({ name: 'sent_at', nullable: true })
  sentAt: Date;

  @Column({ name: 'delivered_at', nullable: true })
  deliveredAt: Date;

  @Column({ name: 'finished_at', nullable: true })
  finishedAt: Date;

  // Санхүүгийн мэдээлэл
  @Column('decimal', { precision: 12, scale: 2, nullable: true })
  price: number;

  @Column('decimal', { precision: 12, scale: 2, nullable: true, name: 'charge_amount' })
  chargeAmount: number;

  // Тээврийн мэдээлэл
  @Column({ nullable: true, name: 'track_code', unique: true })
  @Index()
  trackCode: string;

  // Нэмэлт тэмдэглэлүүд
  @Column({ default: false })
  isFast: boolean;

  @Column({ default: false, name: 'is_broken' })
  broken: boolean;

  @Column({ type: 'text', nullable: true })
  notes: string;

  // Зурагнууд (JSON array хэлбэрээр хадгалах)
  @Column( { nullable: true })
  image: string;

  // Тооцоолол хийх hook
  @BeforeInsert()
  @BeforeUpdate()
  calculateVolume() {
    this.volume = this.length * this.width * this.height;
  }

  // Хугацааны тэмдэглэлүүдийг автоматаар шинэчлэх
  @BeforeUpdate()
  updateTimestamps() {
    if (this.status === ItemStatus.DELIVERED && !this.deliveredAt) {
      this.deliveredAt = new Date();
    }
    if (this.status === ItemStatus.RECEIVED && !this.receivedAt) {
      this.receivedAt = new Date();
    }
  }

  // Virtual field (calculated)
  dimensions?: string;

  @AfterLoad()
  setDimensions() {
    this.dimensions = `${this.length}урт, ${this.width}өргөн, ${this.height}өндөр`;
  }
}