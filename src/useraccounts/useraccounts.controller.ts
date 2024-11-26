import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { UserService } from './useraccounts.service';

@ApiTags('user') // Grouping the endpoints under the 'user' tag in Swagger
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' }) // Swagger operation summary
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', description: 'Unique username for the user' },
        password: { type: 'string', description: 'Password for the user' },
      },
      required: ['username', 'password'],
    },
  }) // Describes the request body for Swagger
  async register(@Body() body: { username: string; password: string }) {
    if (!body.username || !body.password) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }
    return this.userService.register(body.username, body.password);
  }

  @Post('login')
  @ApiOperation({ summary: 'Authenticate a user' }) // Swagger operation summary
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', description: 'Username of the user' },
        password: { type: 'string', description: 'Password of the user' },
      },
      required: ['username', 'password'],
    },
  }) // Describes the request body for Swagger
  async login(@Body() body: { username: string; password: string }) {
    if (!body.username || !body.password) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }

    const isValid = await this.userService.validateUser(body.username, body.password);
    if (isValid) {
      return { message: 'Login successful' };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
