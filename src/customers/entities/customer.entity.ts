import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  full_name: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  phone_number: string;

  @Column('text')
  legal_id: string;

  @Column('text')
  legal_id_type: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order;
}
