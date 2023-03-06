/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { databaseProvider } from "src/provider/database.provider";

@Module({
    providers: [...databaseProvider],
    exports: [...databaseProvider],
})
export class DatabaseModule{

}