import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';
import { CreateTrantactionDto } from './dto/create-trantaction.dto';
import { Trantaction } from './entities/trantaction.entity';

@Injectable()
export class TrantactionsService {
  private logger = new Logger('transactionsService');

  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Trantaction>,
  ) {}

  async create(createTrantactionDto: CreateTrantactionDto) {
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
