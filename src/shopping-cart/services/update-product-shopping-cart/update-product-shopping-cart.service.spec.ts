import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProductShoppingCartService } from './update-product-shopping-cart.service';

describe('UpdateProductShoppingCartService', () => {
  let service: UpdateProductShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateProductShoppingCartService],
    }).compile();

    service = module.get<UpdateProductShoppingCartService>(UpdateProductShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
