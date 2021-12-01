import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingCartModule } from 'src/shopping-cart/shopping-cart.module';
import { AcceptDemandController } from './controllers/accept-demand/accept-demand.controller';
import { CancelDemandController } from './controllers/cancel-demand/cancel-demand.controller';
import { CreateDemandController } from './controllers/create-demand/create-demand.controller';
import { DemandGateway } from './events/demand.gateway';
import { Demand, DemandSchema } from './schemas/demand.schema';
import { AcceptDemandService } from './services/accept-demand/accept-demand.service';
import { CancelDemandService } from './services/cancel-demand/cancel-demand.service';
import { CreateDemandService } from './services/create-demand/create-demand.service';
import { FindDemandByIdService } from './services/find-demand-by-id/find-demand-by-id.service';
import { FindDemandByIdController } from './controllers/find-demand-by-id/find-demand-by-id.controller';
import { FindDemandByUserService } from './services/find-demand-by-user/find-demand-by-user.service';
import { FindDemandByUserController } from './controllers/find-demand-by-user/find-demand-by-user.controller';

@Module({
  providers: [
    CreateDemandService,
    CancelDemandService,
    AcceptDemandService,
    FindDemandByIdService,
    DemandGateway,
    FindDemandByUserService,
  ],
  controllers: [
    CreateDemandController,
    CancelDemandController,
    AcceptDemandController,
    FindDemandByIdController,
    FindDemandByUserController,
  ],
  imports: [
    ShoppingCartModule,
    MongooseModule.forFeature([{ name: Demand.name, schema: DemandSchema }]),
  ],
})
export class DemandModule {}
