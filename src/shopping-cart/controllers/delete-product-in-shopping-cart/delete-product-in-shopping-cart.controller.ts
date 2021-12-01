import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteProductInShoppingCartService } from 'src/shopping-cart/services/delete-product-in-shopping-cart/delete-product-in-shopping-cart.service';

@ApiTags('Shopping cart')
@Controller('api/v1/shopping-cart')
export class DeleteProductInShoppingCartController {
  constructor(
    private readonly deleteProductInShoppingCartService: DeleteProductInShoppingCartService,
  ) {}

  @Delete('/:id/delete')
  @ApiOperation({ summary: 'Delete shopping cart by id' })
  @ApiResponse({
    status: 200,
    description: 'sucess.',
    schema: { example: { message: 'Produto removido com sucesso!' } },
  })
  async delete(@Param('id') id: string): Promise<string> {
    return await this.deleteProductInShoppingCartService.delete(id);
  }
}
