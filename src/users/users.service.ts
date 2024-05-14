import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {LOGIN} from "../interface/interface.login";
import {JwtService} from "@nestjs/jwt";
import {LoginDto} from "../dto/login.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('login') private LoginModel: Model<LOGIN>,
        private readonly jwtService: JwtService
    ) {
    }
    async allUsers() {
        return await this.LoginModel.find({ isAdmin: false }).exec();
    }

    async getOneUser( loginDto:LoginDto){
        return this.LoginModel.find({id:loginDto.id},{ projection: { _id: 0}});
    }

    async deleteUserOne(id:string){
        return this.LoginModel.findOneAndDelete({id});
    }

}
