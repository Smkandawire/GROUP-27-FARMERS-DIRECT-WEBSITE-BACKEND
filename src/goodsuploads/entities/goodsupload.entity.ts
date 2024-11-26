import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goodsupload {
 @PrimaryGeneratedColumn()
id : number;
 
 @Column()
 password: string; 

}
