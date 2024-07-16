import { Body, Controller, Post } from '@nestjs/common';
import { TrantactionsService } from './trantactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
@Controller('trantactions')
export class TrantactionsController {
  constructor(private readonly transactionsService: TrantactionsService) {}

  @Post()
  create(@Body() createTransactionsDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionsDto);
  }
}
