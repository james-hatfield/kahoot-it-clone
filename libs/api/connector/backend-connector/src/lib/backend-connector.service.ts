import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connector, BaseHref } from './connector';
import { Observable, Subject } from 'rxjs';
import { switchMap, startWith, shareReplay } from 'rxjs/operators';
import { User, Quiz } from '@kahoot-it-clone/shared-types';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService implements Connector {
  private userListUpdates = new Subject<void>();
  private quizListUpdates = new Subject<void>();

  constructor(
    @Inject(BaseHref) private baseUrl: string,
    private httpClient: HttpClient
  ) {
    console.log(baseUrl);
  }

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
}
