import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'kahoot-it-clone-quiz',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.scss']
})
export class QuizBuilderComponent {
  selectedQuestion: FormGroup;
  constructor() {}

  handleSelectedQuestion(question: FormGroup) {
    this.selectedQuestion = question;
  }
}
