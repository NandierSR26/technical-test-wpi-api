import { PartialType } from '@nestjs/mapped-types';
import { CreateTrantactionDto } from './create-trantaction.dto';

export class UpdateTrantactionDto extends PartialType(CreateTrantactionDto) {}
