import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from 'src/client/dtos/create-client.dto';
import { Client } from 'src/client/schemas/client.schema';
import { CreateClientService } from 'src/client/services/create-client/create-client.service';

@ApiTags('Client')
@Controller('api/v1/client')
export class CreateClientController {
  constructor(private readonly createClientService: CreateClientService) {}

  @Post()
  @ApiOperation({ summary: 'Create Client' })
  @ApiBody({
    schema: {
      example: {
        name_client: 'Lucas Carvalho',
        whatsapp_number: '99981248041',
        road: 'rua bom futuro',
        number: '13-A',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: {
        number: '13-A',
        road: 'rua bom futuro',
        whatsapp_number: '99981248041',
        name_client: 'Lucas Carvalho',
        _id: '61a68fcb7d176bb4f5eb7f99',
        __v: 0,
      },
    },
  })
  async create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return await this.createClientService.create(createClientDto);
  }
}
