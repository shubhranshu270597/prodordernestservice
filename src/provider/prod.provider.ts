/* eslint-disable prettier/prettier */
import { Provider } from "@nestjs/common";
import { Prod } from "src/prod/entities/prod.entity";
import { Connection } from "typeorm";

export const prodProvider: Provider[] = [
    {
        provide: 'PROD_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(Prod),
            inject: ['DATABASE_CONNECTION'],
    },
]