import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProductShoppingCart } from 'src/shopping-cart/dtos/update-product-shopping-cart.dtop';
import {
  ShoppingCart,
  ShoppingCartDocument,
} from 'src/shopping-cart/schemas/shopping-cart.schema';

@Injectable()
export class UpdateProductShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart.name)
    private readonly shoppingCartModel: Model<ShoppingCartDocument>,
  ) {}

  async update(
    id: string,
    updateProductShoppingCart: UpdateProductShoppingCart,
  ): Promise<ShoppingCart> {
    await this.shoppingCartModel.findByIdAndUpdate(
      { _id: id },
      {
        amount_product: updateProductShoppingCart.amount_product,
        additionais: updateProductShoppingCart.additionais,
      },
    );

    return await this.shoppingCartModel.findById(id);
  }
}
