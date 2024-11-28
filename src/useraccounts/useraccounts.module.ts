import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './useraccounts.controller';
import { UserService } from './useraccounts.service';
import { farmersdirectuseraccount } from './entities/useraccount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([farmersdirectuseraccount])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
