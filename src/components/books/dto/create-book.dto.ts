import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty({
    example: '610d23fd06214e775294200a',
  })
  readonly addedBy: string;
}
