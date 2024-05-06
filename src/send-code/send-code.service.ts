import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as nodemailer from 'nodemailer';
import { LoginDto } from "src/dto/login.dto";
import { LOGIN } from "src/interface/interface.login";

@Injectable()
export class SendCodeService {
    transport: nodemailer.Transporter;

    constructor(@InjectModel('login') private LoginModel: Model<LOGIN>) {
        this.transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'gabrielkvergelidze19@gmail.com',
                pass: 'mtsy rosp qlnh scgm',
            }
        });
    }

    public async send(email: string) {
        const random: number = Math.floor(Math.random() * 99999999) + 1;

            const users = await this.LoginModel.findOne({ email }).exec();

            const obj = { 
                from: 'gabrielkvergelidze19@gmail.com',
                to: users.email, 
                subject: 'You forgot your password. Here is your recovery code:',
                text: String(random), 
            };

            await this.transport.sendMail(obj);
            return String(random); 
        }
    
    }  

 