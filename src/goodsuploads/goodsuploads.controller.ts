import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GoodsuploadsService } from './goodsuploads.service';
import { CreateGoodsuploadDto } from './dto/create-goodsupload.dto';
import { UpdateGoodsuploadDto } from './dto/update-goodsupload.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Goodsupload } from './entities/goodsupload.entity';

@Controller('goodsuploads')
export class GoodsuploadsController {
  constructor(private readonly goodsuploadsService: GoodsuploadsService) {}

  @Post()
  @ApiBody({type:Goodsupload})
  @ApiResponse({status:201, description:'property created ', type:Goodsupload})
   create(@Body() goodsUpload:Goodsupload) {

    return this.goodsuploadsService.createGoodsupload(goodsUpload);

   }
   @Get()
   @ApiOperation({summary:'get all properties'})
   @ApiResponse({status:200, description:'all properties', type:[Goodsupload]})
   findAll():Promise<CreateGoodsuploadDto[]> {
     return this.goodsuploadsService.findAllGoodsUploads(); ;
   }

   @Put(':id')
   @ApiOperation({summary:'update properties'})
   @ApiParam({name:'id', description:'property id', type:Number})
   @ApiBody({type:Goodsupload})
   @ApiResponse({status:200, description:'property updated ', type:Goodsupload})
   update(@Param('id') id: number, @Body() updateData: UpdateGoodsuploadDto): Promise<Goodsupload> {
     return this.goodsuploadsService.updateGoodsUpload(id, updateData);
   }

   @Delete(':id')
   @ApiOperation({summary:'delete properties'})
   @ApiParam({name:'id', description:'property id', type:Number})
   @ApiResponse({status:200, description:'property deleted ', type:Goodsupload})
   remove(@Param('id') id: number): Promise<void> {
     return this.goodsuploadsService.removeGoodsUpload(id);
   }





  
}
