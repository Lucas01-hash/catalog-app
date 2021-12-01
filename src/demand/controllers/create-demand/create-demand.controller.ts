import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDemandDto } from 'src/demand/dtos/demand.dto';
import { Demand } from 'src/demand/schemas/demand.schema';
import { CreateDemandService } from 'src/demand/services/create-demand/create-demand.service';

@ApiTags('Demand')
@Controller('api/v1/demand')
export class CreateDemandController {
  constructor(private readonly createDemandService: CreateDemandService) {}

  @Post()
  @ApiOperation({ summary: 'create Demand' })
  @ApiBody({
    schema: {
      example: {
        receive_at_home: true,
        form_of_payment: 'dinheiro',
        user: '61a6e85b8115d33bc9393104',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: {
        status: 'pendente',
        user: '61a6e85b8115d33bc9393104',
        shopping_cart: [
          {
            _id: '61a6e8cb8115d33bc9393106',
            note: 'teste do antonio',
            additionais: [],
            amount_product: 2,
            product: '61a69994cfc7363c75a65bf5',
            user: '61a6e85b8115d33bc9393104',
            __v: 0,
          },
        ],
        form_of_payment: 'dinheiro',
        receive_at_home: true,
        _id: '61a6e8f78115d33bc9393109',
        __v: 0,
      },
    },
  })
  async create(@Body() createDemandDto: CreateDemandDto): Promise<Demand> {
    return await this.createDemandService.create(createDemandDto);
  }
}
