import { Test, TestingModule } from '@nestjs/testing';
import { DemandGateway } from './demand.gateway';

describe('DemandGateway', () => {
  let gateway: DemandGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandGateway],
    }).compile();

    gateway = module.get<DemandGateway>(DemandGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
