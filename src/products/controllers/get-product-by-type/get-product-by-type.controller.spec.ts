import { Test, TestingModule } from '@nestjs/testing';
import { GetProductByTypeController } from './get-product-by-type.controller';

describe('GetProductByTypeController', () => {
  let controller: GetProductByTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetProductByTypeController],
    }).compile();

    controller = module.get<GetProductByTypeController>(GetProductByTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
