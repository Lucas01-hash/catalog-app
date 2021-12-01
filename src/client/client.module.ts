import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './schemas/client.schema';
import { CreateClientService } from './services/create-client/create-client.service';
import { CreateClientController } from './controllers/create-client/create-client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [CreateClientService],
  controllers: [CreateClientController],
})
export class ClientModule {}
