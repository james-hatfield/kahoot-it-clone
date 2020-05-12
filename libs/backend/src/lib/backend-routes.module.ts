import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { QuizModule } from './quizes/quiz.module';

@Module({
  imports: [QuizModule, UserModule],
  exports: [QuizModule, UserModule]
})
export class BackendRoutesModule {}
