import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { Users } from 'src/users/schemas/user.schema';
import { CreateUserService } from 'src/users/services/create-user/create-user.service';

@ApiTags('Users')
@Controller('api/v1/users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @ApiOperation({ summary: 'create users' })
  @ApiBody({
    schema: {
      example: {
        name: 'antonio',
        email: 'antonio12@gmail.com',
        password: '16022405lt',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'sucess.',
    schema: {
      example: {
        password:
          '$2b$10$SCXJDHwMzhx2BK//Am4VUucUpVq3zAHWzRsD51ZmcN2FFO4BmRK/K',
        email: 'antonio12@gmail.com',
        name: 'antonio',
        _id: '61a6e85b8115d33bc9393104',
        __v: 0,
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return await this.createUserService.insert(createUserDto);
  }
}
