import { Test, TestingModule } from '@nestjs/testing';
import { FindDemandByUserController } from './find-demand-by-user.controller';

describe('FindDemandByUserController', () => {
  let controller: FindDemandByUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindDemandByUserController],
    }).compile();

    controller = module.get<FindDemandByUserController>(FindDemandByUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
