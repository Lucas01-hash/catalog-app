import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShoppingCart } from 'src/shopping-cart/schemas/shopping-cart.schema';
import { FindShoppingCartByUserService } from 'src/shopping-cart/services/get-shopping-cart-by-user/get-shopping-cart-by-user.service';

@ApiTags('Shopping cart')
@Controller('api/v1/shopping-cart')
export class GetShoppingCartByUserController {
  constructor(
    private readonly findShoppingCartByUserService: FindShoppingCartByUserService,
  ) {}

  @Get('/:id')
  @ApiOperation({ summary: 'ifind shopping cart by user' })
  @ApiResponse({
    status: 200,
    description: 'sucess.',
    schema: {
      example: [
        {
          _id: '61a6746713ba7a4f1afb597a',
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
    },
  })
  async getShoppingCartByUser(
    @Param('id') id: string,
  ): Promise<ShoppingCart[]> {
    return await this.findShoppingCartByUserService.findByUser(id);
  }
}
