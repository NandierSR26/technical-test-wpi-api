import { IsDate, IsPositive, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsDate()
  created_at: Date;

  @IsPositive()
  amount_in_cents: number;

  @IsString()
  status: string;

  @IsString()
  payment_method_type: string;
}
