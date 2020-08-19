import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {
  Connector,
  ConnectorService
} from '@kahoot-it-clone/api/connector/backend-connector';
import { User } from '@kahoot-it-clone/shared-types';

const mockUser: User = {
  id: '1',
  username: 'Lostpants',
  password: 'password',
  email: 'lostpants404@email.com',
  organization: 'The Organization',
  userType: 'Admin', // should be an enum
  workplaceDetails: 'I work at places',
  language: 'En',
  bio: 'This is my bio',
  plan: 'Kek',
  quiz: [],
  teamSpace: 'Another one'
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = new BehaviorSubject<User | undefined>(mockUser);
  users = this.backendService.userList;

  constructor(
    @Inject(ConnectorService)
    private backendService: Connector,
    private router: Router
  ) {}

  async login(email: string, password: string) {
    try {
      const user = await this.users
        .pipe(
          take(1),
          map(users =>
            users.filter(u => u.email === email && u.password === password)
          ),
          map(users => users[0])
        )
        .toPromise();

      if (user) {
        this.currentUser.next(user);
        await this.router.navigate(['/dashboard']);
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser.value !== undefined;
  }

  async createUser(user: User) {
    try {
      await this.backendService.createUser(user).toPromise();
    } catch (error) {
      console.error(error);
    } finally {
      await this.router.navigate(['/login']);
    }
  }

  async logout() {
    this.currentUser.next(undefined);
    await this.router.navigate(['/login']);
  }
}
