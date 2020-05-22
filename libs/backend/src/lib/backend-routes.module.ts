import { Module } from '@nestjs/common';

import { QuizModule } from './quizes/quiz.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [QuizModule, UserModule],
  exports: [QuizModule, UserModule]
})
export class BackendRoutesModule {}
