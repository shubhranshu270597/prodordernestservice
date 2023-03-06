/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prod {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    prodname: string;

    @Column()
    prodgroup: string;

    @Column()
    uprice: number;

    @Column()
    qty: number;

    @Column()
    prodowner: string;
}
