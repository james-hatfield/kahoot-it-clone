import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { User } from '@kahoot-it-clone/shared-types';
import { userData } from './user-mock-data';

@Injectable()
export class UserService {
  getuser(userId: string): Observable<User> {
    const foundUser = userData.find(user => user.id === userId);
    if (!foundUser) {
      throw new Error('User not found');
    }
    return of(foundUser);
  }

  getusers(): Observable<User[]> {
    return of(userData);
  }
}
