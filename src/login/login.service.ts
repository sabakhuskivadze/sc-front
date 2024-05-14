import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from 'src/dto/login.dto';
import { LOGIN } from 'src/interface/interface.login';
import {OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import * as socketio from 'socket.io'
import {ChatDto} from "../dto/chat.dto";

@Injectable()
@WebSocketGateway()
export class LoginService  implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        @InjectModel('login') private LoginModel: Model<LOGIN>,
        private readonly jwtService: JwtService
    ) {
    }


    async GetallMember() {
        return await this.LoginModel.find()
    }
    async addMember(loginDto: LoginDto) {
        const newMember = new this.LoginModel({
            id:loginDto.id,
            name: loginDto.name,
            email: loginDto.email,
            password: loginDto.password,
            isAdmin: loginDto.isAdmin ? true : false,
            loginDate: loginDto.loginDate,
            token: loginDto.token
        })
        const playload = {
            sub: loginDto.email,
            username: loginDto.name,
            pass: loginDto.password,
            isAdmin: loginDto.isAdmin,
            loginDate: loginDto.loginDate
        }

        return {
            user: await newMember.save(),
            loginDate: new Date(),
            access_token: await this.jwtService.signAsync(playload),
            users: console.log(loginDto)
        };

    }


    async searhUsers(name: string) {
        return this.LoginModel.find({name}).exec();
    }

    async userDelete(email: string) {
        return  this.LoginModel.findOneAndDelete({email});
    }

    async userNameDelete(name: string) {
        return await this.LoginModel.findOneAndDelete({name})
    }
    async allUsers() {
        return await this.LoginModel.find({ isAdmin: false }).exec();
    }


    @WebSocketServer()
    server!: socketio.Server;


    handleConnection(client: socketio.Socket) {

    }

    handleDisconnect(client: socketio.Socket) {

    }

    async sendmessage(chatDto:ChatDto){


        try {
            this.server.of('/' + chatDto.addres).emit('message', chatDto.messages);
            return true;
        } catch (err) {
            console.log('/' + chatDto.addres)
            console.log( chatDto.addres)
            return err.message;

        }

    }


}
