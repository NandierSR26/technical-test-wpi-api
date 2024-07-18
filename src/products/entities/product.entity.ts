import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('float')
  price: number;

  @Column('int')
  stock: number;

  @Column('text')
  image: string;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order;
}
