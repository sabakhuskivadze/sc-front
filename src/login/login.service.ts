import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from 'src/dto/login.dto';
import { LOGIN } from 'src/interface/interface.login';

@Injectable()
export class LoginService {
    constructor(@InjectModel('login') private LoginModel: Model<LOGIN>) { }

    async GetallMember() {
        return await this.LoginModel.find()
    }

    async addMember(loginDto: LoginDto) {
        const newMember = new this.LoginModel({
            email: loginDto.email,
            password: loginDto.password,
            isAdmin: loginDto.isAdmin
        })
        return await newMember.save()
    }
    async getAdmins(loginDto: LoginDto) {
        if (loginDto.isAdmin == true) {
            return await this.LoginModel.find()
        }
    }
}
