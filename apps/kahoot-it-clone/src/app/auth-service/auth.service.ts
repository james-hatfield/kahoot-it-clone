import { Injectable, Inject } from '@angular/core';
import { User } from '@kahoot-it-clone/shared-types';
import {
  Connector,
  ConnectorService
} from '@kahoot-it-clone/api/connector/backend-connector';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = new BehaviorSubject<User | undefined>(undefined);
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
        this.router.navigate(['/dashboard']);
      } else {
        throw new Error('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  }

  isAuthenticated(): boolean {
    const auth = this.currentUser.value !== undefined;
    return auth;
  }

  async createUser(user: User) {
    await this.backendService.createUser(user).toPromise();
  }

  logout() {
    this.currentUser = undefined;
    this.router.navigate(['/login']);
  }
}
