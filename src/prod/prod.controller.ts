/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProdService } from './prod.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { UpdateProdDto } from './dto/update-prod.dto';
import { Prod } from './entities/prod.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('prod')
export class ProdController {
  constructor(private readonly prodService: ProdService) {}

  
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createProdDto: CreateProdDto) {
    return this.prodService.create(createProdDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<Prod[]> {
    return this.prodService.findAll();
  }

  
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number):Promise<Prod> {
    return this.prodService.findOne(id);
  }

  
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProdDto: UpdateProdDto) {
    return this.prodService.update(id, updateProdDto);
  }

  
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.prodService.remove(id);
  }
}
