import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trantaction } from './entities/trantaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IAcceptanceTokenResponse } from './interfaces/acceptance-token.interface';

@Injectable()
export class TrantactionsService {
  private logger = new Logger('transactionsService');

  constructor(
    @InjectRepository(Trantaction)
    private readonly transactionsRepository: Repository<Trantaction>,

    private readonly http: HttpService,
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

  async getAcceptanceToken(): Promise<string> {
    try {
      const url = `${process.env.API_WOMPI_URL}/merchants/${process.env.PUBLIC_API_KEY_WOMPI_SANDBOX}`;

      const {
        data: { data },
      } = await firstValueFrom(this.http.get<IAcceptanceTokenResponse>(url));

      return data.presigned_acceptance.acceptance_token;
    } catch (error) {
      this.logger.error(error);
      return '';
    }
  }
}
