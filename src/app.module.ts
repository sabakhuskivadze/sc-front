import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sabaa:x92wV9iauvh7pkSv@newcluster.jt35mvb.mongodb.net/nova'), LoginModule],
})
export class AppModule {}
