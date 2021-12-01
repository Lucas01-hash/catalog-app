import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdditionalDto } from 'src/additional/dtos/create-additional.dto';
import {
  Additional,
  AddtionalDocument,
} from 'src/additional/schemas/additional.schema';

@Injectable()
export class InsertAdditionalService {
  constructor(
    @InjectModel(Additional.name)
    private readonly additionalModel: Model<AddtionalDocument>,
  ) {}

  async insertAdditional(
    createAdditionalDto: CreateAdditionalDto[],
  ): Promise<Additional[]> {
    const additionais = await this.additionalModel.insertMany(
      createAdditionalDto,
    );
    return additionais;
  }
}
