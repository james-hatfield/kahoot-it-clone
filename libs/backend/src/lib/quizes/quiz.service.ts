import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Quiz } from '@kahoot-it-clone/shared-types';

import { quizData } from './quiz-mock-data';

@Injectable()
export class QuizService {
  getQuiz(quizId: string): Observable<Quiz> {
    const quiz = quizData.find(q => q.id === quizId);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    console.log('made it', quiz);
    return of(quiz);
  }

  getQuizes(): Observable<Quiz[]> {
    return of(quizData);
  }
}
