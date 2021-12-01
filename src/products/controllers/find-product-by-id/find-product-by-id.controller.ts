import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindProductByIdService } from 'src/products/services/find-product-by-id/find-product-by-id.service';

@ApiTags('Products')
@Controller('api/v1/products')
export class FindProductByIdController {
  constructor(
    private readonly findProductByIdService: FindProductByIdService,
  ) {}

  @Get('/:id')
  @ApiOperation({ summary: 'find product by id' })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: {
        product: {
          _id: '61a69994cfc7363c75a65bf5',
          client: '61a64f10605a969191f2e055',
          code: 'CXS2689',
          price: 25.5,
          type: 'doces',
          description: 'banana coruda caramelizada',
          name: 'banana frita',
          picture: [
            'https://receitatodahora.com.br/wp-content/uploads/2018/07/bolo-de-chocolate-fofinho-de-liquidificador-500x500.jpg',
            'https://s2.glbimg.com/YuM02XjUE_N16iVcg8RMs0T5oag=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/5/3/ClBo5mSAa7YRBkmDJRvw/receita-de-bolo-de-chocolate.jpg',
          ],
          __v: 0,
        },
        additionais: [
          {
            _id: '61a69994cfc7363c75a65bf7',
            options: [
              { title: 'coxinha grande', price: 25 },
              { title: 'coxinha media', price: 17 },
            ],
            maximum: 3,
            minimum: 1,
            type: 'incremento',
            behavior: 'soma',
            product: '61a69994cfc7363c75a65bf5',
            __v: 0,
          },
          {
            _id: '61a69994cfc7363c75a65bf8',
            options: [{ title: 'coxinha media', price: 17.5 }],
            maximum: 3,
            minimum: 1,
            type: 'incremento',
            behavior: 'soma',
            product: '61a69994cfc7363c75a65bf5',
            __v: 0,
          },
        ],
      },
    },
  })
  async findProduct(@Param('id') id: string): Promise<any> {
    return await this.findProductByIdService.findProductById(id);
  }
}
