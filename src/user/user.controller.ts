/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
    
    constructor(
            private readonly userService:UserService,
            private jwtService: JwtService
        ){}

    @Post('register')
    async register(
        @Body('name') name : string,
        @Body('email') email : string,
        @Body('password') password : string,      
    ){  
        const saltOrRounds = 10;
        const hashedpassword = await bcrypt.hash(password, saltOrRounds);
        return this.userService.create({name,email,password:hashedpassword});
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
    ){
        const user = await this.userService.findOne(email);

        if(!user){
            throw new BadRequestException('Invalid User')
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new BadRequestException('Invalid Password')
        }
        console.log(user);
        const jwt = await this.jwtService.signAsync({id:user.id});
        // console.log(jwt)
        return {accessToken: jwt}
        
    }
}
