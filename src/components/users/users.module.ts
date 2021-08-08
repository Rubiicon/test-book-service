import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EncryptionModule } from '../encryption/encryption.module';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
  imports: [DatabaseModule, EncryptionModule],
  exports: [UsersService],
})
export class UsersModule {}
