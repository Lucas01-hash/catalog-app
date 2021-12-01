import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdditionalModule } from './additional/additional.module';
import { ClientModule } from './client/client.module';
import { DemandModule } from './demand/demand.module';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://LucasDev:16022405@cluster0.ire6g.mongodb.net/umbler?retryWrites=true&w=majority',
    ),
    ProductsModule,
    UsersModule,
    ShoppingCartModule,
    AdditionalModule,
    DemandModule,
    ClientModule,
  ],
})
export class AppModule {}
