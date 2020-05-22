import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, startWith, switchMap, tap } from 'rxjs/operators';

import { Quiz, User } from '@kahoot-it-clone/shared-types';

import { BaseHref, Connector } from './connector';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService implements Connector {
  private userListUpdates = new Subject<void>();
  private quizListUpdates = new Subject<void>();

  constructor(
    @Inject(BaseHref) private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  userList: Observable<User[]> = this.userListUpdates.pipe(
    // tslint:disable-next-line: deprecation
    startWith(undefined),
    switchMap(() => this.httpClient.get<User[]>(this.baseUrl + '/users')),
    shareReplay(1)
  );

  quizList: Observable<Quiz[]> = this.quizListUpdates.pipe(
    // tslint:disable-next-line: deprecation
    startWith(undefined),
    switchMap(() => this.httpClient.get<Quiz[]>(this.baseUrl + '/quizes')),
    shareReplay(1)
  );

  createUser(user: User): Observable<User> {
    return this.httpClient
      .post<User>(`${this.baseUrl}/users`, user)
      .pipe(tap(() => this.userListUpdates.next()));
  }
}
