import { User } from '@kahoot-it-clone/shared-types';

import { quizData } from '../quizes/quiz-mock-data';

export const userData: User[] = [
  {
    id: '1',
    username: 'Lostpants',
    password: 'password',
    email: 'lostpants404@email.com',
    organization: 'The Organization',
    userType: 'Admin', // should be an enum
    workplaceDetails: 'I work at places',
    language: 'En',
    bio: 'This is my bio',
    plan: 'Kek',
    quiz: quizData,
    teamSpace: 'Another one'
  },
  {
    id: '2',
    username: 'Stykes',
    password: 'password',
    email: 'Stykes@email.com',
    organization: 'The Organization',
    userType: 'Admin', // should be an enum
    workplaceDetails: 'I work at places',
    language: 'En',
    bio: 'This is my bio',
    plan: 'Kek',
    quiz: quizData,
    teamSpace: 'Another one'
  },
  {
    id: '3',
    username: 'EntropicDestruction',
    password: 'password',
    email: 'entropy@email.com',
    organization: 'The Organization',
    userType: 'Admin', // should be an enum
    workplaceDetails: 'I work at places',
    language: 'En',
    bio: 'This is my bio',
    plan: 'Kek',
    quiz: quizData,
    teamSpace: 'Another one'
  }
];
