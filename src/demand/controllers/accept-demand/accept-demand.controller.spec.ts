import { Test, TestingModule } from '@nestjs/testing';
import { AcceptDemandController } from './accept-demand.controller';

describe('AcceptDemandController', () => {
  let controller: AcceptDemandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcceptDemandController],
    }).compile();

    controller = module.get<AcceptDemandController>(AcceptDemandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
