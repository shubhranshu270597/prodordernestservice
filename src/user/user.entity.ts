/* eslint-disable prettier/prettier */
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('secureuser')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

   
    @Column()
    @Index({ unique: true })
    email:string;

    @Column()
    password: string;
}