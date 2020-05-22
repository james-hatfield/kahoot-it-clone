import { Component, Injectable, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'kahoot-it-clone-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
@Injectable()
export class QuestionComponent {
  @Input() questionForm: FormGroup;

  selected = '';

  times = Array.from(new Array(10)).map((_, i) => 10 * (i + 1));

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
