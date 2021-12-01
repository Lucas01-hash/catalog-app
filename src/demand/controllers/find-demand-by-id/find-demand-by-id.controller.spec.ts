import { Test, TestingModule } from '@nestjs/testing';
import { FindDemandByIdController } from './find-demand-by-id.controller';

describe('FindDemandByIdController', () => {
  let controller: FindDemandByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindDemandByIdController],
    }).compile();

    controller = module.get<FindDemandByIdController>(FindDemandByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
