import {
  Quiz,
  Answer,
  Question,
  AnswerOptions,
  Shape
} from '@kahoot-it-clone/shared-types';

const answers1: Answer[] = [
  { shape: Shape.Triangle, image: '', isCorrect: true, answer: '212 F' },
  { shape: Shape.Circle, image: '', isCorrect: false, answer: '200 F' },
  { shape: Shape.Square, image: '', isCorrect: false, answer: '210 F' },
  { shape: Shape.Diamond, image: '', isCorrect: false, answer: '220 F' }
];
const answers2: Answer[] = [
  { shape: Shape.Circle, image: '', isCorrect: true, answer: 'Yes' },
  { shape: Shape.Triangle, image: '', isCorrect: true, answer: 'Yes' },
  { shape: Shape.Square, image: '', isCorrect: true, answer: 'Yes' },
  { shape: Shape.Diamond, image: '', isCorrect: true, answer: 'Yes' }
];
const answers3: Answer[] = [
  { shape: Shape.Circle, image: '', isCorrect: true, answer: '32 F' },
  { shape: Shape.Square, image: '', isCorrect: false, answer: '0 F' },
  { shape: Shape.Triangle, image: '', isCorrect: false, answer: '50 F' },
  { shape: Shape.Diamond, image: '', isCorrect: false, answer: '15 F' }
];

const question1: Question = {
  timeLimit: 10,
  points: 10,
  image: '',
  answerOptions: AnswerOptions.Single,
  answerBank: answers1,
  value: 'What is the boiling point of water?'
};
const question2: Question = {
  timeLimit: 10,
  points: 20,
  image: '',
  answerOptions: AnswerOptions.Single,
  answerBank: answers2,
  value: 'Is water wet?'
};
const question3: Question = {
  timeLimit: 10,
  points: 30,
  image: '',
  answerOptions: AnswerOptions.Single,
  answerBank: answers3,
  value: 'What is the freezing point of water?'
};

export const quizData: Quiz[] = [
  { id: '1', questionBank: [question1, question2, question3] },
  { id: '2', questionBank: [question1, question2, question3] },
  { id: '3', questionBank: [question1, question2, question3] },
  { id: '4', questionBank: [question1, question2, question3] }
];
