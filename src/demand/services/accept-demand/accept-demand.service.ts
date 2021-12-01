import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demand, DemandDocument } from 'src/demand/schemas/demand.schema';

@Injectable()
export class AcceptDemandService {
  constructor(
    @InjectModel(Demand.name)
    private readonly demandModel: Model<DemandDocument>,
  ) {}

  async accept(id: string): Promise<Demand> {
    await this.demandModel.updateOne(
      { _id: id },
      {
        status: 'pedido aceito',
      },
    );

    return await this.demandModel.findById(id);
  }
}
