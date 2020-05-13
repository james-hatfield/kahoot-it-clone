import { Injectable, Inject } from '@angular/core';
import {
  ConnectorService,
  Connector
} from '@kahoot-it-clone/api/connector/backend-connector';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userList = this.backendService.userList;
  quizList = this.backendService.quizList;
  // questionBank = quizData;

  constructor(
    @Inject(ConnectorService)
    private backendService: Connector
  ) {}
}
