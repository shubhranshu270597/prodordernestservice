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
                host: 'ec2-52-21-136-176.compute-1.amazonaws.com',
                port: 5432,
                username: 'jtffvortmzhoeq',
                password: '3a794e607dddbec15cdf530565c56712708cd74dc63ddee9ded2b69eea06d6d8',
                database: 'd2irpkhtlbsi5e',
                entities: [ Prod, Order, User ] ,
                synchronize: true,

            })
       
    },
]