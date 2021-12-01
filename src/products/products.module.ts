import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdditionalModule } from 'src/additional/additional.module';
import { CreateProductController } from './controllers/create-product/create-product.controller';
import { FindProductByIdController } from './controllers/find-product-by-id/find-product-by-id.controller';
import { GetProductByTypeController } from './controllers/get-product-by-type/get-product-by-type.controller';
import { Products, ProductSchema } from './schemas/product.schema';
import { CreateProductService } from './services/create-product/create-product.service';
import { FindProductByIdService } from './services/find-product-by-id/find-product-by-id.service';
import { GetProductByTypeService } from './services/get-product-by-type/get-product-by-type.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Products.name, schema: ProductSchema }]),
    AdditionalModule,
  ],
  controllers: [
    CreateProductController,
    GetProductByTypeController,
    FindProductByIdController,
  ],
  providers: [
    CreateProductService,
    GetProductByTypeService,
    FindProductByIdService,
  ],
})
export class ProductsModule {}
