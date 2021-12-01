import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProductInShoppingCartService } from './delete-product-in-shopping-cart.service';

describe('DeleteProductInShoppingCartService', () => {
  let service: DeleteProductInShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteProductInShoppingCartService],
    }).compile();

    service = module.get<DeleteProductInShoppingCartService>(DeleteProductInShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
