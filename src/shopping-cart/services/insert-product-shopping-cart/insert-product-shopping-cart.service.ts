import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertProductShoppingCart } from 'src/shopping-cart/dtos/insert-product-shopping-cart.dto';
import {
  ShoppingCart,
  ShoppingCartDocument,
} from 'src/shopping-cart/schemas/shopping-cart.schema';

@Injectable()
export class InsertProductShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart.name)
    private readonly shoppingCartModel: Model<ShoppingCartDocument>,
  ) {}

  async insert(
    insertProductShoppingCart: InsertProductShoppingCart,
  ): Promise<ShoppingCart> {
    return await this.shoppingCartModel.create(insertProductShoppingCart);
  }
}
