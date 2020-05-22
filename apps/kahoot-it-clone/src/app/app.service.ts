import { Inject, Injectable } from '@angular/core';

import {
  Connector,
  ConnectorService
} from '@kahoot-it-clone/api/connector/backend-connector';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userList = this.backendService.userList;
  quizList = this.backendService.quizList;

  constructor(
    @Inject(ConnectorService)
    private backendService: Connector
  ) {}
}
