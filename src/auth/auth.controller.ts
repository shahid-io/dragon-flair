import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './dto';
import { Constants, ErrorCodes, StatusCodes } from "../utils/common"
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() dto: SignUpDto) {
        try {
            const data = await this.authService.signup(dto);
            const response = {
                message: Constants.SIGNUP_SUCCESS,
                status: StatusCodes.STATUS_CREATED,
                data: data,
            }
            return response;
        } catch (error) {
            throw error;
        }
    }

    @Post('signin')
    async signin(@Body() dto: SignInDto) {
        try {
            const data = await this.authService.signin(dto);
            const response = {
                message: Constants.LOGIN_SUCCESS,
                status: StatusCodes.STATUS_OK,
                data: data,
            }
            return response;
        } catch (error) {
            throw error;
        }
    }
}