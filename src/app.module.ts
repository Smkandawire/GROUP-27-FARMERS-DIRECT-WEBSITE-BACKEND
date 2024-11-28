import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './useraccounts/useraccounts.module';

import { Goodsupload } from './goodsuploads/entities/goodsupload.entity';
import { Service } from './services/entities/service.entity';
import { farmersdirectuseraccount } from './useraccounts/entities/useraccount.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'farmersdirect', 
      entities: [farmersdirectuseraccount,Goodsupload,Service],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
