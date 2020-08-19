import { Component } from '@angular/core';

import { AnswerOptions, Question } from '@kahoot-it-clone/shared-types';

@Component({
  selector: 'kahoot-it-clone-quiz-bank',
  templateUrl: './quiz-bank.component.html',
  styleUrls: ['./quiz-bank.component.scss']
})
export class QuizBankComponent {
  questions: Question[] = [
    {
      timeLimit: 60,
      points: 1000,
      image: '',
      value: '',
      answerOptions: AnswerOptions.Single,
      answerBank: []
    }
  ];

  addQuestion() {
    const newQuestion: Question = {
      timeLimit: 60,
      points: 1000,
      image: '',
      value: '',
      answerOptions: AnswerOptions.Single,
      answerBank: []
    };
    this.questions.push(newQuestion);
  }
}
