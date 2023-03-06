/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProdService } from './prod.service';
import { ProdController } from './prod.controller';
import { DatabaseModule } from 'src/database/database.module';
import { prodProvider } from 'src/provider/prod.provider';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [ProdController],
  providers: [...prodProvider, ProdService]
})
export class ProdModule {}
