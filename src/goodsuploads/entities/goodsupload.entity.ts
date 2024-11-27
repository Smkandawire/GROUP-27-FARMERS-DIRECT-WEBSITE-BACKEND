import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goodsupload {
    @ApiProperty({description:"unique identifier"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description:"image url"})
    @Column()
    image: string;

    @ApiProperty({description:"name of the uploaded goods"})
    @Column()
    name: string;

    @ApiProperty({description:"price of the uploaded goods"})
   
    @Column()
    price: number;

    

}
