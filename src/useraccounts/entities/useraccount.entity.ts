import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Useraccount {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

  
    @Column()
    password: string; 
}
