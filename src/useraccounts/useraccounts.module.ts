import { Module } from '@nestjs/common';
import { UseraccountsService } from './useraccounts.service';
import { UseraccountsController } from './useraccounts.controller';

@Module({
  controllers: [UseraccountsController],
  providers: [UseraccountsService],
})
export class UseraccountsModule {}
