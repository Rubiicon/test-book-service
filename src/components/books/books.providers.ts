import { Mongoose } from 'mongoose';
import { BookSchema } from './shemas/book.schema';

export const booksProviders = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Book', BookSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
