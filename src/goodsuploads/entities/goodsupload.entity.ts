import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goodsupload {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;
   
    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    description: string;
}
