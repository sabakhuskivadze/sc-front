import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { loginSchema } from 'src/entity/login.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'login', schema:loginSchema}])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
   