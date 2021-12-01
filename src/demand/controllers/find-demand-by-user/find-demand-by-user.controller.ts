import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Demand } from 'src/demand/schemas/demand.schema';
import { FindDemandByUserService } from 'src/demand/services/find-demand-by-user/find-demand-by-user.service';

@ApiTags('Demand')
@Controller('api/v1/demand')
export class FindDemandByUserController {
  constructor(
    private readonly findDemandByUserService: FindDemandByUserService,
  ) {}

  @Get('/:userId/user')
  @ApiOperation({ summary: 'find Demand by user' })
  @ApiResponse({
    status: 200,
    description: 'Sucess.',
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
  async findByUser(@Param('userId') userId: string): Promise<Demand[]> {
    return await this.findDemandByUserService.findByUser(userId);
  }
}
