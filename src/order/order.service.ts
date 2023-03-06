/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InsertResult, Repository, DeleteResult } from 'typeorm';

@Injectable()
export class OrderService {

  constructor(@Inject('ORDER_REPOSITORY') private orderRepository: Repository<Order>){}
    
  async create(createOrderDto: CreateOrderDto): Promise<InsertResult> {
    return this.orderRepository.insert(createOrderDto);
  }

  async findAll():Promise<Order []> {
    return this.orderRepository.find();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne({where: {orderid:id}});
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const orderToUpdate = await this.findOne(id);
    // console.log(orderToUpdate)
    if(orderToUpdate === undefined || orderToUpdate === null){
        throw new NotFoundException();
    }
    await this.orderRepository.update(id,updateOrderDto);
    return this.findOne(id);
  }

  async remove(id: string):Promise<DeleteResult> {
    const orderToDelete = await this.findOne(id);
    if(orderToDelete === undefined){
        throw new NotFoundException();
    }
    return this.orderRepository.delete(id);
  }
}
