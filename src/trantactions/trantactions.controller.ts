import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { TrantactionsService } from './trantactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { IntegritySignatureInterceptor } from './interceptors/integrity-signature.interceptor';
@Controller('transactions')
export class TrantactionsController {
  constructor(private readonly transactionsService: TrantactionsService) {}

  @Post()
  @UseInterceptors(IntegritySignatureInterceptor)
  create(@Body() createTransactionsDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionsDto);
  }

  @Get('acceptance-token')
  async acceptanceToken() {
    return await this.transactionsService.getAcceptanceToken();
  }
}
