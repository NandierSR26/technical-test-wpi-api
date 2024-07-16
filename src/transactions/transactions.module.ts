import { Module } from '@nestjs/common';
import { TrantactionsService } from './transactions.service';
import { TrantactionsController } from './transactions.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trantaction } from './entities/trantaction.entity';

@Module({
  controllers: [TrantactionsController],
  providers: [TrantactionsService],
  imports: [HttpModule, TypeOrmModule.forFeature([Trantaction])],
})
export class TrantactionsModule {}
