import { PartialType } from '@nestjs/mapped-types';
import { CreateCognitoIdpDto } from './create-cognito-idp.dto';

export class UpdateCognitoIdpDto extends PartialType(CreateCognitoIdpDto) {}
