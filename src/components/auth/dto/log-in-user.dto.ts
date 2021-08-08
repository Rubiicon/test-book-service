import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LogInUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'kyukfgj',
  })
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'rubick@gmail.com',
  })
  readonly email: string;
}
