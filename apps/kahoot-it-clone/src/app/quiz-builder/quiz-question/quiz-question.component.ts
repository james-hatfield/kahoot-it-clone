import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AnswerOptions, Question } from '@kahoot-it-clone/shared-types';

@Component({
  selector: 'kahoot-it-clone-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      timeLimit: [60],
      points: 1000,
      image: '',
      value: '',
      answerOptions: AnswerOptions.Single,
      answerBank: []
    });
  }
}
