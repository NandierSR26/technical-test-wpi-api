import { Customer } from 'src/customers/entities/customer.entity';
import { Product } from 'src/products/entities/product.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  address_line_1: string;

  @Column('text')
  address_line_2: string;

  @Column('text')
  country: string;

  @Column('text')
  region: string;

  @Column('text')
  city: string;

  @Column('text')
  postal_code: string;

  @Column('float')
  total: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

  @OneToOne(() => Transaction)
  @JoinColumn()
  transaction: Transaction;
}
