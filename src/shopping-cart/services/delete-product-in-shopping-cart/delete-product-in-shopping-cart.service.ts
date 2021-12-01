import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ShoppingCart,
  ShoppingCartDocument,
} from 'src/shopping-cart/schemas/shopping-cart.schema';

@Injectable()
export class DeleteProductInShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart.name)
    private readonly shoppingCartModel: Model<ShoppingCartDocument>,
  ) {}

  async delete(id: string): Promise<string> {
    await this.shoppingCartModel.deleteOne({ _id: id });

    return JSON.stringify({ message: 'Produto removido com sucesso!' });
  }
}
