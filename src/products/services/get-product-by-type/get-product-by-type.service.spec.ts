import { Test, TestingModule } from '@nestjs/testing';
import { GetProductByTypeService } from './get-product-by-type.service';

describe('GetProductByTypeService', () => {
  let service: GetProductByTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProductByTypeService],
    }).compile();

    service = module.get<GetProductByTypeService>(GetProductByTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
