import { FormBuilder } from '@angular/forms';
import { Shape } from '@kahoot-it-clone/shared-types';

const fb = new FormBuilder();

export const createQuestionGroup = () => {
  return fb.group({
    question: '',
    timeLimit: 0,
    points: 0,
    answerOptions: '',
    image: '',
    answers: fb.array([
      fb.group({
        shape: Shape.Triangle,
        image: '',
        isCorrect: false,
        answer: ''
      }),
      fb.group({
        shape: Shape.Diamond,
        image: '',
        isCorrect: false,
        answer: ''
      }),
      fb.group({
        shape: Shape.Circle,
        image: '',
        isCorrect: false,
        answer: ''
      }),
      fb.group({
        shape: Shape.Square,
        image: '',
        isCorrect: false,
        answer: ''
      })
    ])
  });
};
