import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UserDocument, Users } from 'src/users/schemas/user.schema';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectModel(Users.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async insert(createUserDto: CreateUserDto): Promise<Users> {
    const userExists = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (userExists) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Email de usuario já existe!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hash = await bcrypt.hash(createUserDto.password, 10);

    return await this.userModel.create({ ...createUserDto, password: hash });
  }
}
