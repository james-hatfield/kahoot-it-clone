import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { createQuestionGroup } from './quiz-bank/quiz-util';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly quiz: FormGroup;

  constructor(private fb: FormBuilder) {
    const question = createQuestionGroup();
    this.quiz = this.fb.group({
      name: '',
      questionBank: this.fb.array([question])
    });
  }

  get questions() {
    return this.quiz.get('questionBank') as FormArray;
  }
}
