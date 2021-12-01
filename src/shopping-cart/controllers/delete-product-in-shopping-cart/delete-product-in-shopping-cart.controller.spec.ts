import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProductInShoppingCartController } from './delete-product-in-shopping-cart.controller';

describe('DeleteProductInShoppingCartController', () => {
  let controller: DeleteProductInShoppingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteProductInShoppingCartController],
    }).compile();

    controller = module.get<DeleteProductInShoppingCartController>(DeleteProductInShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
