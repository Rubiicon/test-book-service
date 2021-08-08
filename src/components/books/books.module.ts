import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BooksController } from './books.controller';
import { booksProviders } from './books.providers';
import { BooksService } from './books.service';

@Module({
  providers: [BooksService, ...booksProviders],
  controllers: [BooksController],
  imports: [DatabaseModule],
})
export class BooksModule {}
