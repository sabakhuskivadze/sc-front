import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from 'src/dto/login.dto';
import { LOGIN } from 'src/interface/interface.login';
import {ChatDto} from "../dto/chat.dto";


@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,

        ) { }

@Get()
async getallMember(){
        return await this.loginService.GetallMember();
}

    @Post()
    async addMember(@Body() loginDto: LoginDto) {
        return await this.loginService.addMember(loginDto)
    }


    @Get(':name')
    async searchUsers(@Param('name') name: string) {
        return await this.loginService.searhUsers(name)
    } 

    @Delete(":email")
    async deleteUsers(@Param('email') email:string) {
        return await this.loginService.userDelete(email)
    }

    @Delete("name/:name")
    async deleteUserName(@Param('name') name:string) {
        return this.loginService.userNameDelete(name)
    }


    // @Post('/chat')
    // async sendmethod(@Body() chatDto: ChatDto) {
    //     chatDto.messages = chatDto.messages;
    //     console.log(chatDto)
    //     console.log(this.loginService.sendmessage(chatDto))
    //     return await this.loginService.sendmessage(chatDto);
    // }
}
 