import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument, Products } from 'src/products/schemas/product.schema';

@Injectable()
export class GetProductByTypeService {
  constructor(
    @InjectModel(Products.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async findBytype(types?: string[]): Promise<Products[]> {
    if (types) {
      return await this.productModel.find({ type: { $in: types } }).exec();
    }
    return await this.productModel.find().exec();
  }
}
