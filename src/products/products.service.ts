import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { initialData } from './data/seed-data';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('productService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOneBy({ id });
      if (!product) throw new NotFoundException(`Product not found`);

      return product;
    } catch (error) {
      return null;
    }
  }

  async deleteAllProducts() {
    const query = this.productRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        'Unexpected error, check server logs',
      );
    }
  }

  async insertProductsList() {
    const productsDb = await this.findAll();
    if (productsDb.length) return 'Products already inserted in the database';

    const products = initialData.products;
    const insertPromises = [];

    products.forEach((product) => {
      insertPromises.push(this.productRepository.save(product));
    });

    await Promise.all(insertPromises);
    return 'Products inserted in the database';
  }
}
