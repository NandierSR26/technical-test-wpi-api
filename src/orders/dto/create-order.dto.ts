import { IsPositive, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  address_line_1: string;

  @IsString()
  address_line_2: string;

  @IsString()
  country: string;

  @IsString()
  region: string;

  @IsString()
  city: string;

  @IsString()
  postal_code: string;

  @IsPositive()
  total: number;

  @IsPositive()
  @Min(1)
  product_amount: number;

  @IsString()
  customer: string;

  @IsString()
  product: string;

  @IsString()
  transaction: string;
}
