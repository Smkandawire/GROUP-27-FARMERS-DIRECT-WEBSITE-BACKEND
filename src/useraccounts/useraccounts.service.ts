import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Useraccount } from './entities/useraccount.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Useraccount)
    private userRepository: Repository<Useraccount>,
  ) {}

  async register(username: string, password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ username, password: hashedPassword });
    await this.userRepository.save(user);
    return 'User registered successfully';
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return true;
    }
    return false;
  }
}
