import { Controller, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signin')
    login(@Req() req: Request) {
        return { message: "Sign in" }
    }

    @Post('signup')
    signup(@Body() dto: any) {
        console.log({
            dto,
        })
        return { data: dto }
    }

}