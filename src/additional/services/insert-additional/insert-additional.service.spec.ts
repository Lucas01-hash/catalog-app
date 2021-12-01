import { Test, TestingModule } from '@nestjs/testing';
import { InsertAdditionalService } from './insert-additional.service';

describe('InsertAdditionalService', () => {
  let service: InsertAdditionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsertAdditionalService],
    }).compile();

    service = module.get<InsertAdditionalService>(InsertAdditionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
