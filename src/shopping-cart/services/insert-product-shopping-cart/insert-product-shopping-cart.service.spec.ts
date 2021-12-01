import { Test, TestingModule } from '@nestjs/testing';
import { InsertProductShoppingCartService } from './insert-product-shopping-cart.service';

describe('InsertProductShoppingCartService', () => {
  let service: InsertProductShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsertProductShoppingCartService],
    }).compile();

    service = module.get<InsertProductShoppingCartService>(InsertProductShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
