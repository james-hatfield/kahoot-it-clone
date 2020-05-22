import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { Shape } from '@kahoot-it-clone/shared-types';

const fb = new FormBuilder();

export const createQuestionGroup = () => {
  return fb.group({
    question: new FormControl('', Validators.required),
    timeLimit: new FormControl(0, Validators.required),
    points: new FormControl(0, Validators.required),
    answerOptions: new FormControl('', Validators.required),
    image: '',
    answers: createAnswers()
  });
};

function createAnswers() {
  const formArray = new FormArray([]);
  Object.keys(Shape).forEach(s => {
    formArray.push(
      fb.group({
        shape: s,
        image: '',
        isCorrect: false,
        answer: ''
      })
    );
  });
  return formArray;
}
