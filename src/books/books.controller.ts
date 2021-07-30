import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationBookDto } from 'src/pagination/dto/pagination.dto';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './shemas/book.schema';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create book' })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all book' })
  @ApiResponse({
    status: 200,
    description: 'The found books',
  })
  @ApiQuery({ name: 'limit' })
  @ApiQuery({ name: 'start' })
  @HttpCode(HttpStatus.OK)
  getBooks(@Query() paginationBookDto: PaginationBookDto): Promise<Book[]> {
    return this.booksService.getall(paginationBookDto);
  }
}
