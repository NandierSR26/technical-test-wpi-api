import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  full_name: string;

  @Column('text')
  email: string;

  @Column('text')
  phone_number: string;

  @Column('text')
  legal_id: string;

  @Column({
    type: 'enum',
    enum: ['CC', 'NIT', 'PP', 'CE', 'TI', 'DNI', 'RG', 'OTHER'],
    default: 'CC',
  })
  legal_id_type: string;
}
