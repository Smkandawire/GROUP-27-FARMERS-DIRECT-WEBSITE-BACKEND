import { Module } from '@nestjs/common';
import { GoodsuploadsService } from './goodsuploads.service';
import { GoodsuploadsController } from './goodsuploads.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goodsupload } from './entities/goodsupload.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Goodsupload])
  ],
  exports: [GoodsuploadsService],
  controllers: [GoodsuploadsController],
  providers: [GoodsuploadsService],
})
export class GoodsuploadsModule {}
