import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Useraccount } from './entities/useraccount.entity';
import * as bcrypt from 'bcrypt';
import { LoginItem, signupitem } from './interface/signupitems';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Useraccount)
    private userRepository: Repository<Useraccount>,
  ) {}

  // Register function to use SignupItem interface
  async register(signupItem: signupitem): Promise<string> {
    try {
      // Check if the user already exists
      const existingUser = await this.userRepository.findOne({ where: { username: signupItem.username } });
      if (existingUser) {
        throw new Error('User already exists');
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(signupItem.password, 10);

      // Create new user with hashed password
      const newUser = this.userRepository.create({
        username: signupItem.username,
        email: signupItem.email,
        password: hashedPassword,
      });

      // Save the user to the database
      await this.userRepository.save(newUser);

      return 'User registered successfully';
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred during registration');
    }
  }

  // Validate user login function to use LoginItem interface
  async validateUser(loginItem: LoginItem): Promise<boolean> {
    const { username, password } = loginItem;
    const user = await this.userRepository.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return true; // Login successful
    }
    return false; // Invalid credentials
  }
}
