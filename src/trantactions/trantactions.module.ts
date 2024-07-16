import { Module } from '@nestjs/common';
import { TrantactionsService } from './trantactions.service';
import { TrantactionsController } from './trantactions.controller';

@Module({
  controllers: [TrantactionsController],
  providers: [TrantactionsService],
})
export class TrantactionsModule {}
