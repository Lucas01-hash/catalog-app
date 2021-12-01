import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductService } from './create-product.service';

describe('CreateProduct', () => {
  let provider: CreateProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProductService],
    }).compile();

    provider = module.get<CreateProductService>(CreateProductService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
