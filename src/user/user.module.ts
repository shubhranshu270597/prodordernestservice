/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from 'src/provider/user.provider';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports: [
        DatabaseModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          })
      ],
    providers: [...userProvider, UserService, JwtStrategy],
    controllers: [UserController]
})
export class UserModule {

}
