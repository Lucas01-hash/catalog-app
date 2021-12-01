import { Test, TestingModule } from '@nestjs/testing';
import { GetShoppingCartByUserController } from './get-shopping-cart-by-user.controller';

describe('GetShoppingCartByUserController', () => {
  let controller: GetShoppingCartByUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetShoppingCartByUserController],
    }).compile();

    controller = module.get<GetShoppingCartByUserController>(GetShoppingCartByUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
