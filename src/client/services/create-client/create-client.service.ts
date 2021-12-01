import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from 'src/client/dtos/create-client.dto';
import { Client, ClientDocument } from 'src/client/schemas/client.schema';

@Injectable()
export class CreateClientService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return await this.clientModel.create(createClientDto);
  }
}
