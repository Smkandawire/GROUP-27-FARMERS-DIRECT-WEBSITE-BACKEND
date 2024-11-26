import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodsuploadsService } from './goodsuploads.service';
import { CreateGoodsuploadDto } from './dto/create-goodsupload.dto';
import { UpdateGoodsuploadDto } from './dto/update-goodsupload.dto';

@Controller('goodsuploads')
export class GoodsuploadsController {
  constructor(private readonly goodsuploadsService: GoodsuploadsService) {}

  @Post()
  create(@Body() createGoodsuploadDto: CreateGoodsuploadDto) {
    return this.goodsuploadsService.create(createGoodsuploadDto);
  }

  @Get()
  findAll() {
    return this.goodsuploadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodsuploadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodsuploadDto: UpdateGoodsuploadDto) {
    return this.goodsuploadsService.update(+id, updateGoodsuploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodsuploadsService.remove(+id);
  }
}
