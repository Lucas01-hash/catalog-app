import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ShoppingCart } from 'src/shopping-cart/schemas/shopping-cart.schema';

export type DemandDocument = Demand & Document;

@Schema()
export class Demand {
  @Prop()
  receive_at_home: boolean;

  @Prop()
  form_of_payment: 'cartão' | 'dinheiro';

  @Prop()
  shopping_cart: ShoppingCart[];

  @Prop()
  user: string;

  @Prop()
  status: string;
}

export const DemandSchema = SchemaFactory.createForClass(Demand);
