import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-useraccount.dto';

export class UpdateUseraccountDto extends PartialType(CreateUserDto) {}
