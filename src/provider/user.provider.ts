/* eslint-disable prettier/prettier */
import { Provider } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { Connection } from "typeorm";

export const userProvider: Provider[] = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) =>
            connection.getRepository(User),
            inject: ['DATABASE_CONNECTION'],
    },
]