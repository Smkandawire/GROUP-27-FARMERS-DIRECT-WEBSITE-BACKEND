import { ApiProperty } from '@nestjs/swagger';

export class CreateUseraccountDto {
  @ApiProperty({ description: 'The unique ID of the user account' })
  id: number;

  @ApiProperty({ description: 'The unique username of the user' })
  username: string;

  @ApiProperty({ description: 'The email address of the user' })
  email: string;

  @ApiProperty({ description: 'The password for the user account (hashed in production)' })
  password: string;

}
