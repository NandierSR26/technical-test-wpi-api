import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MinLength(3)
  full_name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone_number: string;

  @IsString()
  legal_id: string;

  @IsIn(['CC', 'NIT', 'PP', 'CE', 'TI', 'DNI', 'RG', 'OTHER'])
  legal_id_type: string;
}
