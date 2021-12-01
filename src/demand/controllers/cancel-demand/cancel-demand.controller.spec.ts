import { Test, TestingModule } from '@nestjs/testing';
import { CancelDemandController } from './cancel-demand.controller';

describe('CancelDemandController', () => {
  let controller: CancelDemandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CancelDemandController],
    }).compile();

    controller = module.get<CancelDemandController>(CancelDemandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
