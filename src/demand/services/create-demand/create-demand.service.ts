import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDemandDto } from 'src/demand/dtos/demand.dto';
import { Demand, DemandDocument } from 'src/demand/schemas/demand.schema';
import { FindShoppingCartByUserService } from 'src/shopping-cart/services/get-shopping-cart-by-user/get-shopping-cart-by-user.service';

@Injectable()
export class CreateDemandService {
  constructor(
    @InjectModel(Demand.name)
    private readonly demandModel: Model<DemandDocument>,
    private readonly findShoppingCartByUserService: FindShoppingCartByUserService,
  ) {}

  async create(createDemandDto: CreateDemandDto): Promise<Demand> {
    const shoppingCart = await this.findShoppingCartByUserService.findByUser(
      createDemandDto.user,
    );

    return await this.demandModel.create({
      status: 'pendente',
      shopping_cart: shoppingCart,
      ...createDemandDto,
    });
  }
}
