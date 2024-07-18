import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  private logger = new Logger('ordersService');

  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,

    private readonly productService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = plainToInstance(Order, createOrderDto);
      await this.ordersRepository.save(order);
      const updatedProduct = await this.productService.updateProductStock(
        createOrderDto.product,
        createOrderDto.product_amount,
      );
      return {
        order,
        updatedProduct,
      };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async findAll() {
    const orders = await this.ordersRepository.find();
    return orders;
  }
}
