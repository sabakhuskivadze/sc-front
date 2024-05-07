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
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
   
//ds