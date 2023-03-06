/* eslint-disable prettier/prettier */
import { IsString, IsDateString  } from "class-validator";

export class CreateOrderDto {
    @IsString()
    orderid:string;

    @IsString()
    ordername:string;

    @IsString()
    prodId:string;

    @IsDateString()
    orderdate:Date;
}
