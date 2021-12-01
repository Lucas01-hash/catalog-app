import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindAdditionaisByProductService } from 'src/additional/services/find-additionais-by-product/find-additionais-by-product.service';
import { ProductDocument, Products } from 'src/products/schemas/product.schema';

@Injectable()
export class FindProductByIdService {
  constructor(
    @InjectModel(Products.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly findAdditionaisByProductService: FindAdditionaisByProductService,
  ) {}

  async findProductById(_id: string): Promise<any> {
    const product = await this.productModel.findById(_id);
    const additionais =
      await this.findAdditionaisByProductService.findAdditionaisByProduct(
        product._id,
      );

    return JSON.stringify({
      product,
      additionais,
    });
  }
}
