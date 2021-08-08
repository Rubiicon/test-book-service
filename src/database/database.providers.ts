import * as mongoose from 'mongoose';

const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      return mongoose.connect(
        `${isProd() ? process.env.MONGODB_URL_PROD : process.env.MONGODB_URL}/${
          process.env.MONGODB_NAME
        }`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        },
      );
    },
  },
];
