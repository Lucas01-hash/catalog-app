import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demand, DemandDocument } from 'src/demand/schemas/demand.schema';

@Injectable()
export class FindDemandByIdService {
  constructor(
    @InjectModel(Demand.name)
    private readonly demandModel: Model<DemandDocument>,
  ) {}

  findById(id: string) {
    return this.demandModel.findOne({ _id: id });
  }
}
