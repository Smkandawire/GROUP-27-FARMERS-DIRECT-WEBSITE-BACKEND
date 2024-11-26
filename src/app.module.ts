import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './useraccounts/useraccounts.module';
import { Useraccount } from './useraccounts/entities/useraccount.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'testdb', 
      entities: [Useraccount],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
