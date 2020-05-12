import { Controller, Get, Param } from '@nestjs/common';
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
}
