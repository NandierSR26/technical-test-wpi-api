import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { IntegritySignatureInterceptor } from './interceptors/integrity-signature.interceptor';
import { ITransactionRequest } from './interfaces/transaction-request.interface';
import { ICardTokenRequest } from './interfaces/card-tokens.interface';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @UseInterceptors(IntegritySignatureInterceptor)
  create(@Body() createTransactionsDto: ITransactionRequest) {
    return this.transactionsService.create(createTransactionsDto);
  }

  @Post('token-card')
  getTokenCard(@Body() cardData: ICardTokenRequest) {
    return this.transactionsService.getCardToken(cardData);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }
}
