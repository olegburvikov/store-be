import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'olegburvikov@gmail.com', description: 'User email' })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '12345',
    description: 'User password',
  })
  @IsString()
  readonly password: string;
}
