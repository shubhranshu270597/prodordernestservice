/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class Order{

    @PrimaryGeneratedColumn()
    orderid:string;

    @Column()
    ordername:string;

    @Column()
    prodId:string;

    @Column()
    orderdate:Date;

}