import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { BooksModule } from './components/books/books.module';
import { UsersModule } from './components/users/users.module';
import { AuthModule } from './components/auth/auth.module';
import { EncryptionModule } from './components/encryption/encryption.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BooksModule,
    UsersModule,
    AuthModule,
    EncryptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
