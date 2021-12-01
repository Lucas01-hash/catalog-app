import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demand, DemandDocument } from 'src/demand/schemas/demand.schema';

@Injectable()
export class FindDemandByUserService {
  constructor(
    @InjectModel(Demand.name)
    private readonly demandModel: Model<DemandDocument>,
  ) {}

  async findByUser(userId: string): Promise<Demand[]> {
    return await this.demandModel.find({ user: userId });
  }
}
