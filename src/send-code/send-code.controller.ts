import { Controller, Get, Param } from '@nestjs/common';
import { SendCodeService } from './send-code.service';
import { LoginDto } from 'src/dto/login.dto';

@Controller('send-code')
export class SendCodeController {
    constructor (private readonly sendService:SendCodeService){}

    @Get(':email')
    async getCode(@Param('email') email:string) {
        return await this.sendService.send(email)
    }
}
 