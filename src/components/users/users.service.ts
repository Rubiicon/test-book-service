import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EncryptionService } from '../encryption/encryption.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.tdo';
import { User } from './shemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL') private readonly userModel: Model<User>,
    private readonly encryptionService: EncryptionService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    newUser.password = await this.encryptionService.hash(newUser.password);
    return newUser.save();
  }

  async findOne(email): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id, updateDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate(
      { _id: id },
      { $set: updateDto },
      { new: true },
    );
  }

  async remove(id): Promise<User> {
    return this.userModel.findByIdAndDelete({ _id: id });
  }
}
