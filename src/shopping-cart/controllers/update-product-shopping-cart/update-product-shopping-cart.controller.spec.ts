import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProductShoppingCartController } from './update-product-shopping-cart.controller';

describe('UpdateProductShoppingCartController', () => {
  let controller: UpdateProductShoppingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateProductShoppingCartController],
    }).compile();

    controller = module.get<UpdateProductShoppingCartController>(UpdateProductShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
