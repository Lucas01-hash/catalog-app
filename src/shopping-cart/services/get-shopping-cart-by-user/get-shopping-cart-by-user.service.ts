import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ShoppingCart,
  ShoppingCartDocument,
} from 'src/shopping-cart/schemas/shopping-cart.schema';

@Injectable()
export class FindShoppingCartByUserService {
  constructor(
    @InjectModel(ShoppingCart.name)
    private readonly shoppingCartModel: Model<ShoppingCartDocument>,
  ) {}

  async findByUser(id: string): Promise<ShoppingCart[]> {
    return await this.shoppingCartModel.find({ user: id });
  }
}
