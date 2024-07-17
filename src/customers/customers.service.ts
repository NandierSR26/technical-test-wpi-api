import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
    try {
      const customers = await this.customerRepository.find();
      return customers;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async findOne(id: string) {
    try {
      const customer = await this.customerRepository.findOneBy({ id });
      return customer;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
