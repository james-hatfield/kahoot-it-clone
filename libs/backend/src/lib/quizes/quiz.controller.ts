import { Controller, Get, Param } from '@nestjs/common';
import { QuizService } from '../quizes/quiz.service';

@Controller('/quizes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  getQuizes() {
    return this.quizService.getQuizes();
  }

  @Get('/:quizId')
  getQuiz(@Param('quizId') quizId: string) {
    return this.quizService.getQuiz(quizId);
  }
}
