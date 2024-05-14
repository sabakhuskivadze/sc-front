import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {loginSchema} from "../entity/login.schema";

@Module({
  imports:[ MongooseModule.forFeature([{name: 'login', schema:loginSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
