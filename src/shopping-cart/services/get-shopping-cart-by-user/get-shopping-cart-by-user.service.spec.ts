import { Test, TestingModule } from '@nestjs/testing';
import { FindShoppingCartByUserService } from './get-shopping-cart-by-user.service';

describe('GetShoppingCartByUserService', () => {
  let service: FindShoppingCartByUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindShoppingCartByUserService],
    }).compile();

    service = module.get<FindShoppingCartByUserService>(
      FindShoppingCartByUserService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
