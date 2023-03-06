/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { orderProvider } from 'src/provider/order.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [OrderController],
  providers: [...orderProvider, OrderService],

})
export class OrderModule {}
