export interface User {
  username: string;
  password: string;
  email: string;
  organization: string;
  // teacher, student, work etc
  userType: string;
  // what the kahoots are used for
  workplaceDetails: string;
  language: string;
  bio: string;
  // membership plan
  plan: string;
  quiz: Quiz[];
  // work with other people on an upgraded membership, maybe dont need right away
  // for functionality
  teamSpace: string;
}

export interface Quiz {
  // question bank that holds all questions in the quiz
  questionBank: Question[];
}

export interface Question {
  timeLimit: number;
  points: number;
  image: string;
  // multi selected answers or single selected answers, check right type for string,
  // dropdown menu to select
  answerOptions: AnswerOptions;
  answerBank: Answer[];
}

export enum AnswerOptions {
  Single = 'Single-Select',
  Multi = 'Multi-Select'
}

export interface Answer {
  // precursor image
  shape: string;
  answer: string;
  image: string;
  isCorrect: boolean;
}
