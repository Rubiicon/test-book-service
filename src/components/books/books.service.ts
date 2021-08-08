import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PaginationBookDto } from 'src/components/books/dto/pagination.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './shemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<Book>) {}

  async getAll(paginationBookDto: PaginationBookDto): Promise<Book[]> {
    return this.bookModel
      .find()
      .limit(Number(paginationBookDto.limit))
      .skip(Number(paginationBookDto.start))
      .exec();
  }

  async create(bookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(bookDto);
    return newBook.save();
  }
}
