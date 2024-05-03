import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
class login{
    @Prop({required:true, type:"string"})
    email:string
    @Prop({required:true, type:"string"})
    name:string
    @Prop({required:true, type:"string"})
    password:string
    @Prop({required:true, type:"boolean"})
    isAdmin:boolean
}

export const loginSchema = SchemaFactory.createForClass(login) 