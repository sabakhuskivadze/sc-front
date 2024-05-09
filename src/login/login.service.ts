import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { query } from 'express';
import { get } from 'http';
import { Model } from 'mongoose';
import { LoginDto } from 'src/dto/login.dto';
import { LOGIN } from 'src/interface/interface.login';
import * as nodemailer from 'nodemailer'
@Injectable()
export class LoginService {
    constructor(
        @InjectModel('login') private LoginModel: Model<LOGIN>,
        private readonly jwtService: JwtService
    ) { }
    async GetallMember() {
        return await this.LoginModel.find()
    }
    async addMember(loginDto: LoginDto) {
        const newMember = new this.LoginModel({
            name: loginDto.name,
            email: loginDto.email,
            password: loginDto.password,
            isAdmin: loginDto.isAdmin ? true : false,
            token: loginDto.token
        })  
        const playload = { sub: loginDto.email, username: loginDto.name, pass: loginDto.password, isAdmin: loginDto.isAdmin }
        return {    
            user: await newMember.save(),
            loginDate: new Date(),
            access_token: await this.jwtService.signAsync(playload),
            users: console.log(loginDto)
        };
 
    }
    

    async searhUsers(name: string) {
        return this.LoginModel.find({ name }).exec();
    }

    async userDelete(email:string) {
        return await this.LoginModel.findOneAndDelete({ email });
    }

    async userNameDelete(name:string) {
        return await this.LoginModel.findOneAndDelete({name})
    }

}