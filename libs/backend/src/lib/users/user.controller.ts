import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common';

import { User } from '@kahoot-it-clone/shared-types';

import { UserService } from '../users/user.service';

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
