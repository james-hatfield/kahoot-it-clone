import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@kahoot-it-clone/material';
import { environment } from '../environments/environment';
import { BackendConnectorModule } from '@kahoot-it-clone/api/connector/backend-connector';
import { QuizComponent } from './quiz/quiz.component';
import { QuizBankComponent } from './quiz/quiz-bank/quiz-bank.component';
import { QuestionComponent } from './quiz/question/question.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizBankComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    BackendConnectorModule.forRoot(environment.baseUrl),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
