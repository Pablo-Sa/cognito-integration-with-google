import { Injectable } from '@nestjs/common';
import { CreateCognitoIdpDto } from './dto/create-cognito-idp.dto';
import { UpdateCognitoIdpDto } from './dto/update-cognito-idp.dto';
import * as AWS from 'aws-sdk';
import { CognitoIdentity } from 'aws-sdk';

@Injectable()
export class CognitoIdpService {
  create(createCognitoIdpDto: CreateCognitoIdpDto):CreateCognitoIdpDto {
    return createCognitoIdpDto;
  }

  findAll() {
    return `This action returns all cognitoIdp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cognitoIdp`;
  }

  update(id: number, updateCognitoIdpDto: UpdateCognitoIdpDto) {
    return `This action updates a #${id} cognitoIdp`;
  }

  remove(id: number) {
    return `This action removes a #${id} cognitoIdp`;
  }

  static createConnectionCognito(){
    return { 
      accessKeyId:process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
      region:process.env.AWS_REGION
    };
  }

  describeIdentityPool(identityPoolId:string){
    const client = new AWS.CognitoIdentity(CognitoIdpService.createConnectionCognito());
    return client.describeIdentityPool({IdentityPoolId: identityPoolId});
  }

  signinCallback(authResult, identityPoolId) {
       AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: identityPoolId,
          Logins: {
             'accounts.google.com': authResult
          }
       });

       const teste = new CognitoIdentity(CognitoIdpService.createConnectionCognito());
  
       console.log(teste)


       AWS.config.getCredentials(()=>{
        console.log(AWS.config.credentials);

       })

      }
}
