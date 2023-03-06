
/* eslint-disable prettier/prettier */
import { IsString, IsDateString  } from "class-validator";

export class UpdateOrderDto{
    @IsString()
    orderid:string;

    @IsString()
    ordername:string;

    @IsString()
    prodId:string;

    @IsDateString()
    orderdate:Date;
}

