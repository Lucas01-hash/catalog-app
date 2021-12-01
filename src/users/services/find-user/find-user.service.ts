import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/users/schemas/user.schema';

@Injectable()
export class FindUserService {
  constructor(
    @InjectModel(Users.name)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async findOne(email: string): Promise<Users | undefined> {
    return this.userModel.findOne({ email: email });
  }
}
