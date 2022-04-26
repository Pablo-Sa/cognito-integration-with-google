import { Test, TestingModule } from '@nestjs/testing';
import { CognitoIdpController } from './cognito-idp.controller';
import { CognitoIdpService } from './cognito-idp.service';

describe('CognitoIdpController', () => {
  let controller: CognitoIdpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CognitoIdpController],
      providers: [CognitoIdpService],
    }).compile();

    controller = module.get<CognitoIdpController>(CognitoIdpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
