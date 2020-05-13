import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

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
    console.log(question);
  }
}
