import { Module } from '@nestjs/common';
import { GoodsuploadsService } from './goodsuploads.service';
import { GoodsuploadsController } from './goodsuploads.controller';

@Module({
  controllers: [GoodsuploadsController],
  providers: [GoodsuploadsService],
})
export class GoodsuploadsModule {}
