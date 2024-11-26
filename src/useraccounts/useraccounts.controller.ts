import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseraccountsService } from './useraccounts.service';
import { CreateUseraccountDto } from './dto/create-useraccount.dto';
import { UpdateUseraccountDto } from './dto/update-useraccount.dto';

@Controller('useraccounts')
export class UseraccountsController {
  constructor(private readonly useraccountsService: UseraccountsService) {}

  @Post()
  create(@Body() createUseraccountDto: CreateUseraccountDto) {
    return this.useraccountsService.create(createUseraccountDto);
  }

  @Get()
  findAll() {
    return this.useraccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.useraccountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUseraccountDto: UpdateUseraccountDto) {
    return this.useraccountsService.update(+id, updateUseraccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.useraccountsService.remove(+id);
  }
}
