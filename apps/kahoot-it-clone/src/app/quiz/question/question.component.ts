import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'kahoot-it-clone-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() questionForm: FormGroup;

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  get points() {
    return this.questionForm.get('points') as FormControl;
  }

  onSubmit() {
    console.log(this.questionForm);
  }
}
