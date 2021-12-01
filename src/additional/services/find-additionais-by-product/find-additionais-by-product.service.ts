import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Additional,
  AddtionalDocument,
} from 'src/additional/schemas/additional.schema';

@Injectable()
export class FindAdditionaisByProductService {
  constructor(
    @InjectModel(Additional.name)
    private readonly additionalModel: Model<AddtionalDocument>,
  ) {}

  async findAdditionaisByProduct(productId: string): Promise<Additional[]> {
    return await this.additionalModel.find({ product: productId });
  }
}
