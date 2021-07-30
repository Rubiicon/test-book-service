import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Consequences',
  })
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Aleatha Romig',
  })
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: 256,
  })
  readonly pages: number;
}
