import { Component, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { QuizService } from '../quiz-service';

import { createQuestionGroup } from './quiz-util';

@Component({
  selector: 'kahoot-it-clone-quiz-bank',
  templateUrl: './quiz-bank.component.html',
  styleUrls: ['./quiz-bank.component.css']
})
export class QuizBankComponent {
  questions = this.quizService.questions;
  @Output() selectedQuestion = new BehaviorSubject<FormGroup>(
    this.questions.controls[0] as FormGroup
  );

  constructor(private quizService: QuizService) {}

  drop(event: { currentIndex: number; previousIndex: number }) {
    const dir = event.currentIndex > event.previousIndex ? 1 : -1;
    const from = event.previousIndex;
    const to = event.currentIndex;
    const temp = this.questions.at(from);

    for (let i = from; i * dir < to * dir; i = i + dir) {
      const current = this.questions.at(i + dir);
      this.questions.setControl(i, current);
    }
    this.questions.setControl(to, temp);
  }

  selectQuestion(index: number) {
    this.selectedQuestion.next(this.questions.controls[index] as FormGroup);
  }

  onAddQuestion() {
    const question = createQuestionGroup();
    this.questions.push(question);
  }
}
