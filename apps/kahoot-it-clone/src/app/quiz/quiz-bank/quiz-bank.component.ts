import { Component, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { QuizService } from '../quiz-service';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.questions.value,
      event.previousIndex,
      event.currentIndex
    );
  }

  selectQuestion(index: number) {
    this.selectedQuestion.next(this.questions.controls[index] as FormGroup);
  }

  onAddQuestion() {
    const question = createQuestionGroup();
    this.questions.push(question);
  }
}
