import { Body, Controller, Post } from '@nestjs/common';
import { TrantactionsService } from './trantactions.service';
import { CreateTrantactionDto } from './dto/create-trantaction.dto';
@Controller('trantactions')
export class TrantactionsController {
  constructor(private readonly transactionsService: TrantactionsService) {}

  @Post()
  create(@Body() createTransactionsDto: CreateTrantactionDto) {
    return this.transactionsService.create(createTransactionsDto);
  }
}
