import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrantactionsService } from './trantactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
@Controller('transactions')
export class TrantactionsController {
  constructor(private readonly transactionsService: TrantactionsService) {}

  @Post()
  create(@Body() createTransactionsDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionsDto);
  }

  @Get('acceptance-token')
  async acceptanceToken() {
    return await this.transactionsService.getAcceptanceToken();
  }
}
