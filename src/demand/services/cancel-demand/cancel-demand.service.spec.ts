import { Test, TestingModule } from '@nestjs/testing';
import { CancelDemandService } from './cancel-demand.service';

describe('CancelDemandService', () => {
  let service: CancelDemandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancelDemandService],
    }).compile();

    service = module.get<CancelDemandService>(CancelDemandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
