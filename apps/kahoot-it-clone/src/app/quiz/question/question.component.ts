import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Shape } from '@kahoot-it-clone/shared-types';

@Component({
  selector: 'kahoot-it-clone-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
@Input()
export class QuestionComponent {
  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: '',
      timeLimit: '',
      points: '',
      answerOptions: '',
      image: '',
      answers: this.fb.array([
        this.fb.group({
          shape: Shape.Triangle,
          image: '',
          isCorrect: false,
          answer: ''
        }),
        this.fb.group({
          shape: Shape.Diamond,
          image: '',
          isCorrect: false,
          answer: ''
        }),
        this.fb.group({
          shape: Shape.Circle,
          image: '',
          isCorrect: false,
          answer: ''
        }),
        this.fb.group({
          shape: Shape.Square,
          image: '',
          isCorrect: false,
          answer: ''
        })
      ])
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  onSubmit() {
    console.log(this.questionForm.value);
  }

  handleRadioButtons(index: number) {
    const group = this.answers.controls[index];

    if (group) {
      const value = (group as FormGroup).controls.isCorrect;
      (group as FormGroup).controls.isCorrect.setValue(!value);
      console.log(group);
    }
  }
}
