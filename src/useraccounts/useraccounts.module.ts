import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './useraccounts.controller';
import { UserService } from './useraccounts.service';
import { Useraccount } from './entities/useraccount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Useraccount])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
