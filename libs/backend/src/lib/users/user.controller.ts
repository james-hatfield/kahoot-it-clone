import {
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Body
} from '@nestjs/common';
import { UserService } from '../users/user.service';
import { User } from '@kahoot-it-clone/shared-types';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.getusers();
  }

  @Get('/:userId')
  getUser(@Param('userId') userId: string) {
    return this.userService.getuser(userId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: User) {
    console.log(user);
    return this.userService.createUser(user);
  }
}
