import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('insert')
  instertProducts() {
    return this.productsService.insertProductsList();
  }

  @Get('')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('term', ParseUUIDPipe) id: string) {
    return this.productsService.findOne(id);
  }
}
