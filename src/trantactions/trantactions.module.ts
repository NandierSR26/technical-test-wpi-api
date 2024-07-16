import { Module } from '@nestjs/common';
import { TrantactionsService } from './trantactions.service';
import { TrantactionsController } from './trantactions.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trantaction } from './entities/trantaction.entity';

@Module({
  controllers: [TrantactionsController],
  providers: [TrantactionsService],
  imports: [HttpModule, TypeOrmModule.forFeature([Trantaction])],
})
export class TrantactionsModule {}
