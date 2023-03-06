/* eslint-disable prettier/prettier */
import { Order } from "src/order/entities/order.entity";
import { Prod } from "src/prod/entities/prod.entity";
import { User } from "src/user/user.entity";
import { createConnection } from "typeorm";

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type : 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'admin@123',
                database: 'admin',
                entities: [ Prod, Order, User ] ,
                synchronize: true,

            })
       
    },
]