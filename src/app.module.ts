import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './useraccounts/useraccounts.module';
import { Useraccount } from './useraccounts/entities/useraccount.entity';
import { Goodsupload } from './goodsuploads/entities/goodsupload.entity';
import { GoodsuploadsModule } from './goodsuploads/goodsuploads.module';
import { Payment } from './payments/entities/payment.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'farmersdirect', 
      entities: [Useraccount,Goodsupload,Payment],
      synchronize: true,
      retryAttempts: 5,
      retryDelay: 3000, 
    }),
    UserModule,
    GoodsuploadsModule
   
  ],
})
export class AppModule {}
