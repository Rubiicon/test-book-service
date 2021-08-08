import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from '../encryption/encryption.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly encryptionService: EncryptionService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, passwaord: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const compare = await this.encryptionService.compare(
      passwaord,
      user.password,
    );

    if (user && compare) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
