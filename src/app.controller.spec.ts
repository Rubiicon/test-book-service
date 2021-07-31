import { HttpStatus, INestApplication } from '@nestjs/common';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { BooksModule } from './books/books.module';
import { CreateBookDto } from './books/dto/create-book.dto';

describe('Books', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [BooksModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('/POST books', () => {
    const book: CreateBookDto = {
      title: 'My Travel Plans for 2020',
      author: 'Plans to travel to Kenya',
      pages: 32,
    };
    return request(app.getHttpServer())
      .post('/books')
      .set('Accept', 'application/json')
      .send(book)
      .expect(HttpStatus.CREATED);
  });

  afterAll(async () => {
    await app.close();
  });
});
