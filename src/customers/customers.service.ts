import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerRepository.save(createCustomerDto);
    return customer;
  }

  async findAll() {
    const customers = await this.customerRepository.find();
    return customers;
  }

  async findOne(id: string) {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) return new NotFoundException('Customer not found');

    return customer;
  }
}
