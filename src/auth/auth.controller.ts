import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() dto: AuthDto) {
        const data = await this.authService.signup(dto);
        return { data }
    }

    @Post('signin')
    signin() {
        return { message: "Sign in" }
    }



}