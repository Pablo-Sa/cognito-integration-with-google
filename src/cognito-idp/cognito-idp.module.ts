import { Module } from '@nestjs/common';
import { CognitoIdpService } from './cognito-idp.service';
import { CognitoIdpController } from './cognito-idp.controller';

@Module({
  controllers: [CognitoIdpController],
  providers: [CognitoIdpService]
})
export class CognitoIdpModule {}
