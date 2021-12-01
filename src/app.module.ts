import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdditionalModule } from './additional/additional.module';
import { ClientModule } from './client/client.module';
import { DATABASE_SERVICE } from './constants';
import { DemandModule } from './demand/demand.module';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_SERVICE),
    ProductsModule,
    UsersModule,
    ShoppingCartModule,
    AdditionalModule,
    DemandModule,
    ClientModule,
  ],
})
export class AppModule {}
