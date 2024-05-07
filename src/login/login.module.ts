import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { loginSchema } from 'src/entity/login.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.token.secret';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'login', schema:loginSchema}]),
    JwtModule.register({
      secret: 'your_secret_key_here',
<<<<<<< HEAD
      signOptions: { expiresIn: '24h' },
=======
      signOptions: { expiresIn: '24h' }, 
>>>>>>> fc343b6a99360f5d5405b717aaa378d3a6c6e797
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
<<<<<<< HEAD
   
//ds
=======
   
>>>>>>> fc343b6a99360f5d5405b717aaa378d3a6c6e797
