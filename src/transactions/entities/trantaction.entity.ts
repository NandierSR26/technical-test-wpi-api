import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Trantaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp')
  created_at: Date;

  @Column('int')
  amount_in_cents: number;

  @Column('text')
  status: string;

  @Column('text')
  payment_method_type: string;
}
