import {Body, Controller, Delete, Get, Param} from '@nestjs/common';
import {UsersService} from "./users.service";
import {LoginDto} from "../dto/login.dto";

@Controller('users')
export class UsersController {
    constructor(private  readonly  userService: UsersService) {
    }

    @Get()
    async getAllusers()  {
        return await this.userService.allUsers();
    }

    @Get("me")
    async getUserMe(@Body() loginDto:LoginDto) {
        return await this.userService.getOneUser(loginDto)
    }

    @Delete("/:id")
    async deleteUser(@Param('id') id:string) {
        return await  this.userService.deleteUserOne(id)
    }
}
