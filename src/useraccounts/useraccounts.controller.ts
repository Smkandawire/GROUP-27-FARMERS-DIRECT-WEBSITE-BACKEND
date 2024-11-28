import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { UserService } from './useraccounts.service';
import { CreateUseraccountDto } from './dto/create-useraccount.dto'; // Import the updated DTO

@ApiTags('user') // Grouping the endpoints under the 'user' tag in Swagger
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' }) // Swagger operation summary
  @ApiBody({
    type: CreateUseraccountDto, // Reference the updated DTO
  }) // Automatically generates Swagger documentation for the request body
  async register(@Body() body: CreateUseraccountDto) {
    const { email, username, password } = body;

    // Validate required fields
    if (!email || !username || !password) {
      throw new HttpException('All fields are required', HttpStatus.BAD_REQUEST);
    }

    // Call service to handle registration logic
    return this.userService.register({ email, username, password });
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
    const { username, password } = body;

    // Validate required fields
    if (!username || !password) {
      throw new HttpException('Username and password are required', HttpStatus.BAD_REQUEST);
    }

    // Call service to validate user credentials
    const isValid = await this.userService.validateUser({ username, password });
    if (isValid) {
      return { message: 'Login successful' };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
