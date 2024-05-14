import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {PrimaryGeneratedColumn} from "typeorm";



@Schema()
export class login{
    @Prop({required:true, type:"number"})
    id:number
    @Prop({required:true, type:"string"})
    name:string
    @Prop({required:true, type:"string"})
    email?:string
    @Prop({required:true, type:"string"})
    password:string
    @Prop({required:false, type:"boolean"})
    isAdmin:boolean
    @Prop({required:false, type:"string"})
    token?:string
    @Prop({required:false, type:"date"})
    loginDate:Date
}

export const loginSchema = SchemaFactory.createForClass(login);     