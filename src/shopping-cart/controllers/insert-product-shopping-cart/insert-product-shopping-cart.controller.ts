import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InsertProductShoppingCart } from 'src/shopping-cart/dtos/insert-product-shopping-cart.dto';
import { ShoppingCart } from 'src/shopping-cart/schemas/shopping-cart.schema';
import { InsertProductShoppingCartService } from 'src/shopping-cart/services/insert-product-shopping-cart/insert-product-shopping-cart.service';

@ApiTags('Shopping cart')
@Controller('/api/v1/shopping-cart')
export class InsertProductShoppingCartController {
  constructor(
    private readonly insertProductShoppingCartService: InsertProductShoppingCartService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'insert product in shopping cart' })
  @ApiBody({
    schema: {
      example: {
        user: '61a6e85b8115d33bc9393104',
        product: '61a69994cfc7363c75a65bf5',
        amount_product: 2,
        additionais: [],
        note: 'teste do antonio',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: {
        note: 'teste do antonio',
        additionais: [],
        amount_product: 2,
        product: '61a69994cfc7363c75a65bf5',
        user: '61a6e85b8115d33bc9393104',
        _id: '61a6e8cb8115d33bc9393106',
        __v: 0,
      },
    },
  })
  async insertShoppingCart(
    @Body() insertProductShoppingCart: InsertProductShoppingCart,
  ): Promise<ShoppingCart> {
    return await this.insertProductShoppingCartService.insert(
      insertProductShoppingCart,
    );
  }
}
