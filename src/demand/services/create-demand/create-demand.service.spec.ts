import { Test, TestingModule } from '@nestjs/testing';
import { CreateDemandService } from './create-demand.service';

describe('CreateDemandService', () => {
  let service: CreateDemandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDemandService],
    }).compile();

    service = module.get<CreateDemandService>(CreateDemandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
