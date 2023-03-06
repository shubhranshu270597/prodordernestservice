/* eslint-disable prettier/prettier */
import { Provider } from "@nestjs/common";
import { Order } from "src/order/entities/order.entity";
import { Connection } from "typeorm";

export const orderProvider: Provider[] = [
    {
        provide: 'ORDER_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(Order),
            inject: ['DATABASE_CONNECTION'],
    },
]