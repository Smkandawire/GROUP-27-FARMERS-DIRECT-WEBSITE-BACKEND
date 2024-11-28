import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class farmersdirectuseraccount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;
}
