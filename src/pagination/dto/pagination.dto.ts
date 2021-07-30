import { ApiProperty } from '@nestjs/swagger';

export class PaginationBookDto {
  @ApiProperty({ default: 20, required: true })
  readonly limit: number;

  @ApiProperty({ default: 0, required: true })
  readonly start: number;
}
