import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseraccountsModule } from './useraccounts/useraccounts.module';
import { PaymentsModule } from './payments/payments.module';
import { GoodsuploadsModule } from './goodsuploads/goodsuploads.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UseraccountsModule, PaymentsModule, GoodsuploadsModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
