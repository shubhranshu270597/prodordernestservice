/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';
import { Prod } from './entities/prod.entity';
import { InsertResult, Repository, DeleteResult } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdService {

  constructor(@Inject('PROD_REPOSITORY') private prodRepository: Repository<Prod>){}
  
  // constructor(@InjectRepository (Prod) private prodRepository: Repository<Prod>){}
  

  async create(createProdDto: CreateProdDto): Promise<InsertResult> {
    return this.prodRepository.insert(createProdDto);
  }

  async findAll():Promise<Prod[]> {
    return this.prodRepository.find();
  }

  async findOne(id: number): Promise<Prod> {
    return this.prodRepository.findOne({where: {id}});
  }

  async update(id: number, updateProdDto: UpdateProdDto):Promise<Prod> {
    const prodToUpdate = await this.findOne(id);
    if(prodToUpdate === undefined){
        throw new NotFoundException();
    }
    await this.prodRepository.update(id,updateProdDto);
    return this.findOne(id);
  }

  async remove(id: number):Promise<DeleteResult> {
    const prodToDelete = await this.findOne(id);
    if(prodToDelete === undefined){
        throw new NotFoundException();
    }
    return this.prodRepository.delete(id);
  }
}
