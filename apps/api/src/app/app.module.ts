import { Module } from '@nestjs/common';

import { BackendRoutesModule } from '@kahoot-it-clone/backend';

@Module({
  imports: [BackendRoutesModule]
})
export class AppModule {}
