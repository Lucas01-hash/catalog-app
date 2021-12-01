import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateProductShoppingCart } from 'src/shopping-cart/dtos/update-product-shopping-cart.dtop';
import { ShoppingCart } from 'src/shopping-cart/schemas/shopping-cart.schema';
import { UpdateProductShoppingCartService } from 'src/shopping-cart/services/update-product-shopping-cart/update-product-shopping-cart.service';

@ApiTags('Shopping cart')
@Controller('/api/v1/shopping-cart')
export class UpdateProductShoppingCartController {
  constructor(
    private readonly updateProductShoppingCartService: UpdateProductShoppingCartService,
  ) {}

  @Put('/:id/update')
  @ApiOperation({ summary: 'update product in shopping cart' })
  @ApiBody({
    schema: {
      example: {
        amount_product: 2,
        additionais: [
          {
            additional_id: '61a581924cc5fa72c0da7d1d',
            options_additional: [
              {
                title: 'coxinha grande',
                amount_option: 3,
                price_amount_options: 6,
              },
            ],
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: {
        _id: '61a6746713ba7a4f1afb597a',
        note: 'esse aqui é de teste',
        additionais: [
          {
            additional_id: '61a581924cc5fa72c0da7d1d',
            options_additional: [
              {
                title: 'coxinha grande',
                amount_option: 3,
                price_amount_options: 6,
              },
            ],
          },
        ],
        amount_product: 2,
        product: '61a581924cc5fa72c0da7d1b',
        user: '61a64f10605a969191f2e055',
        __v: 0,
      },
    },
  })
  async updateProductShoppingCart(
    @Param('id') id: string,
    @Body() updateProductShoppingCart: UpdateProductShoppingCart,
  ): Promise<ShoppingCart> {
    return await this.updateProductShoppingCartService.update(
      id,
      updateProductShoppingCart,
    );
  }
}
