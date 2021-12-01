import { CreateAdditionalDto } from 'src/additional/dtos/create-additional.dto';

export class CreateProductDto {
  readonly picture: string[];
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly price: number;
  readonly code: string;
  readonly additionais: CreateAdditionalDto[];
  readonly client: string;
}
