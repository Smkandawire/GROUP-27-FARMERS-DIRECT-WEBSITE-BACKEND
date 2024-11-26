import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './useraccounts.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async register(@Body() body: { username: string; password: string }) {
    if (!body.username || !body.password) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }
    return this.userService.register(body.username, body.password);
  }

  @Post('login')
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
