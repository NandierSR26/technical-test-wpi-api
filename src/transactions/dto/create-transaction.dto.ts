import { IsDate, IsEmail, IsIn, IsPositive, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  id: string;

  @IsDate()
  created_at: Date;

  @IsPositive()
  amount_in_cents: number;

  @IsIn(['PENDING', 'APPROVED', 'DECLINED', 'ERROR', 'VOIDED'])
  status: string;

  @IsString()
  payment_method_type: string;

  @IsEmail()
  customer_email: string;
}
