import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserController } from './controllers/create-user/create-user.controller';
import { Users, UserSchema } from './schemas/user.schema';
import { CreateUserService } from './services/create-user/create-user.service';
import { FindUserService } from './services/find-user/find-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [CreateUserController],
  providers: [CreateUserService, FindUserService],
  exports: [FindUserService],
})
export class UsersModule {}
