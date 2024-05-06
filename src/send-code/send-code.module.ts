import { Module } from '@nestjs/common';
import { SendCodeController } from './send-code.controller';
import { SendCodeService } from './send-code.service';
import { MongooseModule } from '@nestjs/mongoose';
import { loginSchema } from 'src/entity/login.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'login', schema:loginSchema}]),],
  controllers: [SendCodeController],
  providers: [SendCodeService]
})
export class SendCodeModule {}
