import { Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Demand } from 'src/demand/schemas/demand.schema';
import { AcceptDemandService } from 'src/demand/services/accept-demand/accept-demand.service';

@ApiTags('Demand')
@Controller('api/v1/demand')
export class AcceptDemandController {
  constructor(private readonly acceptDemand: AcceptDemandService) {}

  @Put('/:id/accept-demand')
  @ApiOperation({ summary: 'Accept Demand' })
  @ApiResponse({
    status: 200,
    description: 'Sucess.',
    schema: {
      example: {
        _id: '61a6a2b42066c19ed3044f9c',
        status: 'pedido aceito',
        user: '61a64f10605a969191f2e055',
        shopping_cart: [
          {
            _id: '61a6a2aa2066c19ed3044f99',
            note: 'esse aqui é de teste',
            additionais: [
              {
                additional_id: '61a581924cc5fa72c0da7d1d',
                options_additional: [
                  {
                    title: 'coxinha grande',
                    amount_option: 2,
                    price_amount_options: 2,
                  },
                  {
                    title: 'coxinha media',
                    amount_option: 5,
                    price_amount_options: 1,
                  },
                ],
              },
            ],
            amount_product: 2,
            product: '61a581924cc5fa72c0da7d1b',
            user: '61a64f10605a969191f2e055',
            __v: 0,
          },
        ],
        form_of_payment: 'cartão',
        receive_at_home: true,
        __v: 0,
      },
    },
  })
  async create(@Param('id') id: string): Promise<Demand> {
    return await this.acceptDemand.accept(id);
  }
}
