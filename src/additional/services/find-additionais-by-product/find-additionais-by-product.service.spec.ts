import { Test, TestingModule } from '@nestjs/testing';
import { FindAdditionaisByProductService } from './find-additionais-by-product.service';

describe('FindAdditionaisByProductService', () => {
  let service: FindAdditionaisByProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAdditionaisByProductService],
    }).compile();

    service = module.get<FindAdditionaisByProductService>(FindAdditionaisByProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
