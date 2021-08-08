import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'afgdg877340594th',
  })
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'rubick@gmail.com',
  })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Rubick',
  })
  readonly userName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Rubick Rabinovich',
  })
  readonly fullName: string;
}
