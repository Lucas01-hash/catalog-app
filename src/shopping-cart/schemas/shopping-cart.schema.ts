import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AdditionaisProductModel } from '../dtos/insert-product-shopping-cart.dto';

export type ShoppingCartDocument = ShoppingCart & Document;

@Schema()
export class ShoppingCart {
  @Prop()
  user: string;

  @Prop()
  product: string;

  @Prop()
  amount_product: number;

  @Prop()
  additionais: AdditionaisProductModel[];

  @Prop()
  note: string;
}

export const shoppingCartSchema = SchemaFactory.createForClass(ShoppingCart);
