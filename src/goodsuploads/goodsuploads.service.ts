import { Injectable } from '@nestjs/common';
import { CreateGoodsuploadDto } from './dto/create-goodsupload.dto';
import { UpdateGoodsuploadDto } from './dto/update-goodsupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Goodsupload } from './entities/goodsupload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoodsuploadsService {

  constructor(

    @InjectRepository(Goodsupload) private readonly goodsUploadRepository:Repository<Goodsupload>
  ){}

  async createGoodsupload(goodsupload:Goodsupload){

    return await this.goodsUploadRepository.save(goodsupload)
 }

 async findAllGoodsUploads():Promise<Goodsupload[]>{

  return await this.goodsUploadRepository.find()
 }

 async updateGoodsUpload(id: number,updateData: Partial<Goodsupload> ):Promise<Goodsupload>{

  await this.goodsUploadRepository.update(id,updateData)

  return await this.goodsUploadRepository.findOneBy({id})

 }
 async removeGoodsUpload(id: number):Promise<void>{
  await this.goodsUploadRepository.delete(id)
 }

}
