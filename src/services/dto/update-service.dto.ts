import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class UpdateServiceDto {
  @ApiProperty({ description: 'The name of the service', required: false })
  @IsOptional()  // This field is optional
  @IsString()
  name?: string;  // Optional property

  @ApiProperty({ description: 'The image URL for the service', required: false })
  @IsOptional()  // This field is optional
  @IsString()
  image?: string;  // Optional property

  @ApiProperty({ description: 'The price of the service', required: false })
  @IsOptional()  // This field is optional
  @IsNumber()
  @Min(0)  // Optional property, must be a non-negative number
  price?: number;  // Optional property
}
