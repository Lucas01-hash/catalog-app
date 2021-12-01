import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/products/dtos/create-product.dto';
import { Products } from 'src/products/schemas/product.schema';
import { CreateProductService } from 'src/products/services/create-product/create-product.service';

@ApiTags('Products')
@Controller('api/v1/products')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiBody({
    schema: {
      example: {
        picture: [
          'https://receitatodahora.com.br/wp-content/uploads/2018/07/bolo-de-chocolate-fofinho-de-liquidificador-500x500.jpg',
          'https://s2.glbimg.com/YuM02XjUE_N16iVcg8RMs0T5oag=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/5/3/ClBo5mSAa7YRBkmDJRvw/receita-de-bolo-de-chocolate.jpg',
        ],
        name: 'banana frita',
        description: 'banana coruda caramelizada',
        type: 'doces',
        price: 25.5,
        code: 'CXS2689',
        title: 'borda',
        additionais: [
          {
            behavior: 'soma',
            type: 'incremento',
            minimum: 1,
            maximum: 3,
            options: [
              {
                title: 'coxinha grande',
                price: 25.0,
              },
              {
                title: 'coxinha media',
                price: 17.0,
              },
            ],
          },
          {
            behavior: 'soma',
            type: 'incremento',
            minimum: 1,
            maximum: 3,
            options: [
              {
                title: 'coxinha media',
                price: 17.5,
              },
            ],
          },
        ],
        client: '61a64f10605a969191f2e055',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Created.',
    schema: {
      example: {
        product: {
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
          _id: '61a69994cfc7363c75a65bf5',
          __v: 0,
        },
        additional: [
          {
            options: [
              { title: 'coxinha grande', price: 25 },
              { title: 'coxinha media', price: 17 },
            ],
            maximum: 3,
            minimum: 1,
            type: 'incremento',
            behavior: 'soma',
            product: '61a69994cfc7363c75a65bf5',
            _id: '61a69994cfc7363c75a65bf7',
            __v: 0,
          },
          {
            options: [{ title: 'coxinha media', price: 17.5 }],
            maximum: 3,
            minimum: 1,
            type: 'incremento',
            behavior: 'soma',
            product: '61a69994cfc7363c75a65bf5',
            _id: '61a69994cfc7363c75a65bf8',
            __v: 0,
          },
        ],
      },
    },
  })
  async create(@Body() createProductDto: CreateProductDto): Promise<Products> {
    return await this.createProductService.insert(createProductDto);
  }
}
