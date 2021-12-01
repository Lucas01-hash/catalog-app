import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeleteProductInShoppingCartController } from './controllers/delete-product-in-shopping-cart/delete-product-in-shopping-cart.controller';
import { GetShoppingCartByUserController } from './controllers/get-shopping-cart-by-user/get-shopping-cart-by-user.controller';
import { InsertProductShoppingCartController } from './controllers/insert-product-shopping-cart/insert-product-shopping-cart.controller';
import { UpdateProductShoppingCartController } from './controllers/update-product-shopping-cart/update-product-shopping-cart.controller';
import {
  ShoppingCart,
  shoppingCartSchema,
} from './schemas/shopping-cart.schema';
import { DeleteProductInShoppingCartService } from './services/delete-product-in-shopping-cart/delete-product-in-shopping-cart.service';
import { FindShoppingCartByUserService } from './services/get-shopping-cart-by-user/get-shopping-cart-by-user.service';
import { InsertProductShoppingCartService } from './services/insert-product-shopping-cart/insert-product-shopping-cart.service';
import { UpdateProductShoppingCartService } from './services/update-product-shopping-cart/update-product-shopping-cart.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShoppingCart.name, schema: shoppingCartSchema },
    ]),
  ],
  controllers: [
    InsertProductShoppingCartController,
    GetShoppingCartByUserController,
    UpdateProductShoppingCartController,
    DeleteProductInShoppingCartController,
  ],
  providers: [
    InsertProductShoppingCartService,
    FindShoppingCartByUserService,
    UpdateProductShoppingCartService,
    DeleteProductInShoppingCartService,
  ],
  exports: [FindShoppingCartByUserService],
})
export class ShoppingCartModule {}
