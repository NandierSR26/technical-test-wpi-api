import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IAcceptanceTokenResponse } from './interfaces/acceptance-token.interface';
import { ITransactionRequest } from './interfaces/transaction-request.interface';
import {
  ICardTokenRequest,
  ICardTokenResponse,
} from './interfaces/card-tokens.interface';
import { ITransactionResponse } from './interfaces/transactions-response';

@Injectable()
export class TransactionsService {
  private logger = new Logger('transactionsService');

  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,

    private readonly http: HttpService,
  ) {}

  async create(createTrantactionDto: ITransactionRequest) {
    const acceptanceToken = await this.getAcceptanceToken();

    const cardData: ITransactionRequest = { ...createTrantactionDto };
    cardData.acceptance_token = acceptanceToken;

    try {
      const url = `${process.env.API_WOMPI_URL}/transactions`;
      const {
        data: { data },
      } = await firstValueFrom(
        this.http.post(url, cardData, {
          headers: {
            Authorization: `Bearer ${process.env.PUBLIC_API_KEY_WOMPI_SANDBOX}`,
          },
        }),
      );

      const {
        amount_in_cents,
        created_at,
        status,
        payment_method_type,
        customer_email,
        id,
      } = data;

      const DTO: CreateTransactionDto = {
        id,
        amount_in_cents,
        created_at,
        customer_email,
        payment_method_type,
        status,
      };

      const transaction = await this.transactionsRepository.save(DTO);
      const newStatus = await this.longPollingTransaction(id);

      transaction.status = newStatus;
      await this.transactionsRepository.save(DTO);

      return transaction;
    } catch (error) {
      if (error.response) {
        this.logger.error('API Error:', {
          status: error.response.status,
          data: error.response.data,
        });
        throw new InternalServerErrorException(error.response.data);
      } else {
        this.logger.error('Error:', error);
        throw new InternalServerErrorException('Something went wrong');
      }
    }
  }

  async findOne(id: string) {
    const url = `${process.env.API_WOMPI_URL}/transactions/${id}`;
    const {
      data: { data },
    } = await firstValueFrom(
      this.http.get<ITransactionResponse>(url, {
        headers: {
          Authorization: `Bearer ${process.env.PUBLIC_API_KEY_WOMPI_SANDBOX}`,
        },
      }),
    );

    return data;
  }

  private async longPollingTransaction(id: string) {
    while (true) {
      const transaction = await this.findOne(id);

      if (transaction.status === 'APPROVED') return transaction.status;
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  private async getAcceptanceToken(): Promise<string> {
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

  async getCardToken(cardDada: ICardTokenRequest): Promise<string> {
    try {
      const url = `${process.env.API_WOMPI_URL}/tokens/cards`;

      const {
        data: { data },
      } = await firstValueFrom(
        this.http.post<ICardTokenResponse>(url, cardDada, {
          headers: {
            Authorization: `Bearer ${process.env.PUBLIC_API_KEY_WOMPI_SANDBOX}`,
          },
        }),
      );

      return data.id;
    } catch (error) {
      this.logger.error(error);
      return '';
    }
  }
}
