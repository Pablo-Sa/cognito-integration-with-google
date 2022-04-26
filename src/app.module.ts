import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CognitoIdpModule } from './cognito-idp/cognito-idp.module';

@Module({
  imports: [CognitoIdpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
