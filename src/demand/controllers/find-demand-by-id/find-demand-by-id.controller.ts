import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Demand } from 'src/demand/schemas/demand.schema';
import { FindDemandByIdService } from 'src/demand/services/find-demand-by-id/find-demand-by-id.service';

@ApiTags('Demand')
@Controller('api/v1/demand')
export class FindDemandByIdController {
  constructor(private readonly findDemandByIdService: FindDemandByIdService) {}

  @Get('/:id')
  @ApiOperation({ summary: 'find Demand by id' })
  @ApiResponse({
    status: 200,
    description: 'sucess.',
    schema: {
      example: {
        _id: '61a6e8f78115d33bc9393109',
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
        __v: 0,
      },
    },
  })
  async findDemandById(@Param('id') id: string): Promise<Demand> {
    return await this.findDemandByIdService.findById(id);
  }
}
