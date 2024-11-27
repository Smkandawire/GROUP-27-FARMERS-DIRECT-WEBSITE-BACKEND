import { ApiProperty } from "@nestjs/swagger";

export class CreateGoodsuploadDto {

    @ApiProperty({description:"unique identifier"})
  
    id: number;

    @ApiProperty({description:"image url"})

    image: string;

    @ApiProperty({description:"name of the uploaded goods"})

    name: string;
    @ApiProperty({description:"price of the uploaded goods"})
    price: number;
}
