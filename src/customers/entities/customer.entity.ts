import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
