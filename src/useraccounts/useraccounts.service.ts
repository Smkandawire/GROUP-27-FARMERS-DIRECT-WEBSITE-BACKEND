import { Injectable } from '@nestjs/common';
import { CreateUseraccountDto } from './dto/create-useraccount.dto';
import { UpdateUseraccountDto } from './dto/update-useraccount.dto';

@Injectable()
export class UseraccountsService {
  create(createUseraccountDto: CreateUseraccountDto) {
    return 'This action adds a new useraccount';
  }

  findAll() {
    return `This action returns all useraccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} useraccount`;
  }

  update(id: number, updateUseraccountDto: UpdateUseraccountDto) {
    return `This action updates a #${id} useraccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} useraccount`;
  }
}
