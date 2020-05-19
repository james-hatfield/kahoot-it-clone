import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Quiz } from '@kahoot-it-clone/shared-types';

export interface Connector {
  userList: Observable<User[]>;
  quizList: Observable<Quiz[]>;
  createUser(user: User): Observable<User>;
}

export const ConnectorService = new InjectionToken<Connector>(
  'ConnectorService'
);

export const BaseHref = new InjectionToken<string>('BaseHref');
