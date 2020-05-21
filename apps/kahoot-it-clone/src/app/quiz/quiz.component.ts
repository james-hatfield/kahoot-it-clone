import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'kahoot-it-clone-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  selectedQuestion: FormGroup;
  constructor() {}

  handleSelectedQuestion(question: FormGroup) {
    this.selectedQuestion = question;
  }
}
