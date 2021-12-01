import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OptionsAdditionalModel } from '../dtos/create-additional.dto';

export type AddtionalDocument = Additional & Document;

@Schema()
export class Additional {
  @Prop()
  product: string;

  @Prop()
  title: string;

  @Prop()
  behavior: string;

  @Prop()
  type: string;

  @Prop()
  minimum: number;

  @Prop()
  maximum: number;

  @Prop()
  options: OptionsAdditionalModel[];
}

export const AdditionalSchema = SchemaFactory.createForClass(Additional);
