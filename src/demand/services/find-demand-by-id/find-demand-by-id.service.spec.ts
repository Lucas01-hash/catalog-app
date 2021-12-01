import { Test, TestingModule } from '@nestjs/testing';
import { FindDemandByIdService } from './find-demand-by-id.service';

describe('FindDemandByIdService', () => {
  let service: FindDemandByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindDemandByIdService],
    }).compile();

    service = module.get<FindDemandByIdService>(FindDemandByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
