import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name_client: string;

  @Prop()
  whatsapp_number: string;

  @Prop()
  road: string;

  @Prop()
  number: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
