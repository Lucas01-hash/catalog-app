import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Additional, AdditionalSchema } from './schemas/additional.schema';
import { FindAdditionaisByProductService } from './services/find-additionais-by-product/find-additionais-by-product.service';
import { InsertAdditionalService } from './services/insert-additional/insert-additional.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Additional.name, schema: AdditionalSchema },
    ]),
  ],
  providers: [InsertAdditionalService, FindAdditionaisByProductService],
  exports: [InsertAdditionalService, FindAdditionaisByProductService],
})
export class AdditionalModule {}
