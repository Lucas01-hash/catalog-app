import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Products } from 'src/products/schemas/product.schema';
import { GetProductByTypeService } from 'src/products/services/get-product-by-type/get-product-by-type.service';

@ApiTags('Products')
@Controller('api/v1/products')
export class GetProductByTypeController {
  constructor(
    private readonly getProductByTypeService: GetProductByTypeService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get products by  types' })
  @ApiResponse({
    status: 200,
    description: 'sucess.',
    schema: {
      example: [
        {
          _id: '61a57efc866fd6cd00cdeac0',
          code: 'CXS2689',
          price: 25.5,
          type: 'salgados',
          description: 'Massa feita de macaxeira e camarão sem cabeça',
          name: 'coxinha',
          picture: [
            'https://receitatodahora.com.br/wp-content/uploads/2018/07/bolo-de-chocolate-fofinho-de-liquidificador-500x500.jpg',
            'https://s2.glbimg.com/YuM02XjUE_N16iVcg8RMs0T5oag=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/5/3/ClBo5mSAa7YRBkmDJRvw/receita-de-bolo-de-chocolate.jpg',
          ],
          __v: 0,
        },
        {
          _id: '61a581924cc5fa72c0da7d1b',
          code: 'CXS2689',
          price: 25.5,
          type: 'salgados',
          description: 'Massa feita de macaxeira e camarão sem cabeça',
          name: 'coxinha',
          picture: [
            'https://receitatodahora.com.br/wp-content/uploads/2018/07/bolo-de-chocolate-fofinho-de-liquidificador-500x500.jpg',
            'https://s2.glbimg.com/YuM02XjUE_N16iVcg8RMs0T5oag=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/5/3/ClBo5mSAa7YRBkmDJRvw/receita-de-bolo-de-chocolate.jpg',
          ],
          __v: 0,
        },
      ],
    },
  })
  async getProductsByTypes(
    @Query(
      'types',
      new ParseArrayPipe({ items: String, separator: ',', optional: true }),
    )
    types?: string[],
  ): Promise<Products[]> {
    return await this.getProductByTypeService.findBytype(types);
  }
}
