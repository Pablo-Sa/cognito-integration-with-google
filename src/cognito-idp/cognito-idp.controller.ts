import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CognitoIdpService } from './cognito-idp.service';
import { CreateCognitoIdpDto } from './dto/create-cognito-idp.dto';
import { UpdateCognitoIdpDto } from './dto/update-cognito-idp.dto';
import * as dotenv from "dotenv";

dotenv.config();

@Controller('cognito-idp')
export class CognitoIdpController {
  constructor(private readonly cognitoIdpService: CognitoIdpService) {}

  @Post()
  async create(@Body() createCognitoIdpDto: CreateCognitoIdpDto) {
//    const resultIdentityPool = await this.cognitoIdpService.describeIdentityPool('sa-east-1:7097ffa4-10fe-4e14-9bee-cde71c7e90c0');
    this.cognitoIdpService.signinCallback(
    'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQzMzJhYjU0NWNjMTg5ZGYxMzNlZmRkYjNhNmM0MDJlYmY0ODlhYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzY3ODE2MjY5NjctdGlxOG01NDhsN3ZhdXA3ZWlzZ2pzODFjNjUxbzhtMjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzNjc4MTYyNjk2Ny10aXE4bTU0OGw3dmF1cDdlaXNnanM4MWM2NTFvOG0yNS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNDYzMzk0NjEzNDMxMzE3MDEyNyIsImVtYWlsIjoicGFibG92LnBlcmVpcmExMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjdPUG9aa3Ixa1liOTJGOU9lV1cydXciLCJuYW1lIjoiUGFibG8gVmluw61jaXVzIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnd4MkxZRnpEQU1fdzJ1cVV0Q3JfRkdxR2p1dElaMEtqWEJPdFROSXc9czk2LWMiLCJnaXZlbl9uYW1lIjoiUGFibG8iLCJmYW1pbHlfbmFtZSI6IlZpbsOtY2l1cyIsImxvY2FsZSI6InB0LUJSIiwiaWF0IjoxNjUwOTE4NzkyLCJleHAiOjE2NTA5MjIzOTIsImp0aSI6IjBiYzYwYTczNzE5MDg4ZmJhOGY0ZDhmODFiOThmNDY0ZTIzOWQ0ZGUifQ.VEZyLHvAOY9gTC8rXM9w-NEYb6svD3cN5958NrPk3jUPfOCONa_qX3PS81iibokYqAPzWgpqQDP-krnfAUobQZIInVlyrIhCccgrbQ4eRjGlheWwba8zKFBww2429uMc_XSBoTZhggucWSWAibVb7hGTndvaAyAAbTfN_jBhcwX6Z58djoXO1OmGj8hqmy6au51G56OpHH3xJAOtD7ccY0W5xB1qlKMx4eattiCXsfmmhTqruE2cp7nQmIm1xUfEokqEDuCdsXgZcq52PPRz6iQ-jogZV1pqGw8V9EXgSgJSuwhxKiJKIo7bOE8cj36PIT2dMqYKrIXlzUdQPtbJgA',
    'sa-east-1:7097ffa4-10fe-4e14-9bee-cde71c7e90c0');
    return this.cognitoIdpService.create(createCognitoIdpDto);
  }

  @Get()
  findAll() {
    return this.cognitoIdpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cognitoIdpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCognitoIdpDto: UpdateCognitoIdpDto) {
    return this.cognitoIdpService.update(+id, updateCognitoIdpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cognitoIdpService.remove(+id);
  }
}
