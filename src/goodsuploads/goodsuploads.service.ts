import { Injectable } from '@nestjs/common';
import { CreateGoodsuploadDto } from './dto/create-goodsupload.dto';
import { UpdateGoodsuploadDto } from './dto/update-goodsupload.dto';

@Injectable()
export class GoodsuploadsService {
  create(createGoodsuploadDto: CreateGoodsuploadDto) {
    return 'This action adds a new goodsupload';
  }

  findAll() {
    return `This action returns all goodsuploads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goodsupload`;
  }

  update(id: number, updateGoodsuploadDto: UpdateGoodsuploadDto) {
    return `This action updates a #${id} goodsupload`;
  }

  remove(id: number) {
    return `This action removes a #${id} goodsupload`;
  }
}
