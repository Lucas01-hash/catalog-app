import { Test, TestingModule } from '@nestjs/testing';
import { FindProductByIdController } from './find-product-by-id.controller';

describe('FindProductByIdController', () => {
  let controller: FindProductByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindProductByIdController],
    }).compile();

    controller = module.get<FindProductByIdController>(FindProductByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
