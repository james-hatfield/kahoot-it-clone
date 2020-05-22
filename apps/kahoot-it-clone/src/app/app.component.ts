import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'kahoot-it-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userList = this.appService.userList;
  quizList = this.appService.quizList;

  constructor(private appService: AppService) {}
}
