import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { CustomersModule } from 'src/customers/customers.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    TypeOrmModule.forFeature([Order]),
    CustomersModule,
    TransactionsModule,
    ProductsModule,
  ],
})
export class OrdersModule {}
