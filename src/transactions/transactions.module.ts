import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [HttpModule, TypeOrmModule.forFeature([Transaction])],
})
export class TransactionsModule {}
