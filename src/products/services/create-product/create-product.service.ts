import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Additional } from 'src/additional/schemas/additional.schema';
import { InsertAdditionalService } from 'src/additional/services/insert-additional/insert-additional.service';
import { CreateProductDto } from 'src/products/dtos/create-product.dto';
import { ProductDocument, Products } from 'src/products/schemas/product.schema';

@Injectable()
export class CreateProductService {
  constructor(
    @InjectModel(Products.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly additionalModel: InsertAdditionalService,
  ) {}

  async insert(createProductDto: CreateProductDto): Promise<any> {
    const product = await this.productModel.create(createProductDto);
    const additionais: Additional[] = [];
    for (const index of createProductDto.additionais) {
      const options = [];
      for (const option of index.options) {
        options.push(option);
      }
      const additional: Additional = {
        behavior: index.behavior,
        maximum: index.maximum,
        minimum: index.minimum,
        product: product._id,
        title: index.title,
        type: index.type,
        options: options,
      };
      additionais.push(additional);
    }

    const additional = await this.additionalModel.insertAdditional(additionais);

    return JSON.stringify({
      product,
      additional,
    });
  }
}
