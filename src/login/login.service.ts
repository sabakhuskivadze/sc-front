import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { query } from 'express';
import { get } from 'http';
import { Model } from 'mongoose';
import { LoginDto } from 'src/dto/login.dto';
import { LOGIN } from 'src/interface/interface.login';
@Injectable()
export class LoginService {
    constructor(
        @InjectModel('login') private LoginModel: Model<LOGIN>,
        private readonly  jwtService: JwtService
    ) {}
    async GetallMember() {
        return await this.LoginModel.find()
    }
    async addMember(loginDto: LoginDto) {
        const newMember = new this.LoginModel({
            name: loginDto.name,
            email: loginDto.email,
            password: loginDto.password,
            isAdmin: loginDto.isAdmin,
            token:loginDto.token
        })
        const playload = {sub:loginDto.email, username:loginDto.name, pass:loginDto.password,isAdmin: loginDto.isAdmin}
        return {
            user: await newMember.save(),
            loginDate: new Date(),
            access_token: await this.jwtService.signAsync(playload)
        };
    }
    async getAdmins(loginDto: LoginDto) {
        if (loginDto.isAdmin == true) {
            return await this.LoginModel.find()
        }
    }

    async searhUsers(name: string) {
        return this.LoginModel.find({ name }).exec();
    }


}