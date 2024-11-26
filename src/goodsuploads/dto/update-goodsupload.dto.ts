import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodsuploadDto } from './create-goodsupload.dto';

export class UpdateGoodsuploadDto extends PartialType(CreateGoodsuploadDto) {}
