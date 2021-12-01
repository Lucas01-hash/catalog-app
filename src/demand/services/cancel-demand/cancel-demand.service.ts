import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demand, DemandDocument } from 'src/demand/schemas/demand.schema';

@Injectable()
export class CancelDemandService {
  constructor(
    @InjectModel(Demand.name)
    private readonly demandModel: Model<DemandDocument>,
  ) {}

  async cancel(id: string): Promise<Demand> {
    await this.demandModel.updateOne(
      { _id: id },
      {
        status: 'cancelada',
      },
    );

    return await this.demandModel.findById(id);
  }
}
