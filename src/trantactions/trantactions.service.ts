import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';
import { Trantaction } from './entities/trantaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TrantactionsService {
  private logger = new Logger('transactionsService');

  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Trantaction>,
  ) {}

  async create(createTrantactionDto: CreateTransactionDto) {
    try {
      const transaction =
        await this.transactionsRepository.save(createTrantactionDto);

      return transaction;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Something went worng!');
    }
  }
}
