import { Test, TestingModule } from '@nestjs/testing';
import { InsertProductShoppingCartController } from './insert-product-shopping-cart.controller';

describe('InsertProductShoppingCartController', () => {
  let controller: InsertProductShoppingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsertProductShoppingCartController],
    }).compile();

    controller = module.get<InsertProductShoppingCartController>(InsertProductShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
