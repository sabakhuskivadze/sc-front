import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from 'src/dto/login.dto';
import { LOGIN } from 'src/interface/interface.login';


@Controller('login')
export class LoginController {
    constructor(
        private readonly loginService: LoginService,

        ) { }

    @Get()
    async getallMember() {
        return await this.loginService.GetallMember()
    }

    @Post()
    async addMember(@Body() loginDto: LoginDto) {
        return await this.loginService.addMember(loginDto)
    }

    @Get('admins')
    async getAdmins(loginDto: LoginDto) {
        return await this.getAdmins(loginDto)
    }

    @Get(':name')
    async searchUsers(@Param('name') name: string) {
        return await this.loginService.searhUsers(name)
    } 

   
  
}
 