import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = plainToInstance(Order, createOrderDto);
      await this.ordersRepository.save(order);
      return order;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async findAll() {
    const orders = await this.ordersRepository.find();
    return orders;
  }
}
