/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from "class-validator";

export class UpdateProdDto {
    @IsString()
    prodname: string;

    @IsString()
    prodgroup: string;

    @IsNumber()
    uprice: number;

    @IsNumber()
    qty: number;

    @IsString()
    prodowner: string;
}
