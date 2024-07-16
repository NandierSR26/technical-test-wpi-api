import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryColumn('text')
  id: string;

  @Column('timestamp')
  created_at: Date;

  @Column('int')
  amount_in_cents: number;

  @Column('enum', {
    enum: ['PENDING', 'APPROVED', 'DECLINED', 'ERROR', 'VOIDED'],
    default: 'PENDING',
  })
  status: string;

  @Column('text')
  payment_method_type: string;
}
