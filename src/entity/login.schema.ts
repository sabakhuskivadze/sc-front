import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
class login{
    @Prop({required:true, type:"string"})
    name:string
    @Prop({required:true, type:"string"})
    email?:string
    @Prop({required:true, type:"string"})
    password:string
    @Prop({required:false, type:"boolean"})x
    isAdmin:boolean
    @Prop({required:false, type:"string"})
    token?:string
    @Prop({required:false, type:"date"})
    loginDate:Date
}

export const loginSchema = SchemaFactory.createForClass(login);     