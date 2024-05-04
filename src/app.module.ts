import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forRoot('mongodb+srv://sabaa:x92wV9iauvh7pkSv@newcluster.jt35mvb.mongodb.net/nova'), LoginModule],
})
export class AppModule {}
