import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserService } from './user.service';
import { Constants, StatusCodes } from 'src/utils/common';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ) { }


    @Get('me')
    getMe(@Req() req: Request) {
        try {
            return req.user;
        } catch (error) {
            throw error;
        }
    }

    @Get()
    async getAllUsers(@Req() req: Request) {
        try {
            
            const data = await this.userService.getAllUsers();
            const response = {
                message: Constants.FETCHED_DATA,
                status: StatusCodes.STATUS_OK,
                data: data,
            }
            return response;
        } catch (error) {
            throw error;
        }
    }
}
