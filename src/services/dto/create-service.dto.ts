import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ description: 'Name of the service' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Description of the service' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Price of the service' })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Optional image URL for the service' })
  @IsOptional()
  @IsString()
  image?: string;
}
