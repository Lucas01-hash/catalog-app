import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Products & Document;

@Schema()
export class Products {
  @Prop()
  picture: string[];

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  @Prop()
  price: number;

  @Prop()
  code: string;

  @Prop()
  client: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
