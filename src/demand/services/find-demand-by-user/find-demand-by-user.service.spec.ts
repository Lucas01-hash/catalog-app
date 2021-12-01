import { Test, TestingModule } from '@nestjs/testing';
import { FindDemandByUserService } from './find-demand-by-user.service';

describe('FindDemandByUserService', () => {
  let service: FindDemandByUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindDemandByUserService],
    }).compile();

    service = module.get<FindDemandByUserService>(FindDemandByUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
