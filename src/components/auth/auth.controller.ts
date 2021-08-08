import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '../users/shemas/user.schema';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiBody } from '@nestjs/swagger';
import { LogInUserDto } from './dto/log-in-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('sign-in')
  async signin(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LogInUserDto })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
