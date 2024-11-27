import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './useraccounts/useraccounts.module';
import { Useraccount } from './useraccounts/entities/useraccount.entity';
import { Goodsupload } from './goodsuploads/entities/goodsupload.entity';
import { GoodsuploadsModule } from './goodsuploads/goodsuploads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'farmersdirect', 
      entities: [Useraccount,Goodsupload],
      synchronize: true,
    }),
    UserModule,
    GoodsuploadsModule
   
  ],
})
export class AppModule {}
