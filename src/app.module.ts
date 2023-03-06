/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdModule } from './prod/prod.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './user/constants';
// import { JwtStrategy } from './provider/jwt.strategy';
// import { jwtConstants } from './constants';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Module({
  imports: [ProdModule, OrderModule, UserModule,],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
