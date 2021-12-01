import { Test, TestingModule } from '@nestjs/testing';
import { AcceptDemandService } from './accept-demand.service';

describe('AcceptDemandService', () => {
  let service: AcceptDemandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcceptDemandService],
    }).compile();

    service = module.get<AcceptDemandService>(AcceptDemandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
