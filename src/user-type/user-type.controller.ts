import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { Constants, StatusCodes } from 'src/utils/common';
import { UserTypeDto } from './dto';

@Controller('user-type')
export class UserTypeController {
    constructor(
        private userTypeService: UserTypeService
    ) { }

    @Get()
    async getAllUserTypes() {
        try {
            const data = await this.userTypeService.getAllUserTypes();
            return {
                message: Constants.FETCHED_DATA,
                status: StatusCodes.STATUS_OK,
                data: data,
            }
        } catch (error) {
            throw error;
        }
    }
    @Post()
    async createUserType(@Body() dto: UserTypeDto) {
        try {
            const data = await this.userTypeService.createUserType(dto)
            return {
                message: Constants.USER_TYPE_CREATED,
                status: StatusCodes.STATUS_OK,
                data: data,
            }
        } catch (error) {
            throw error;
        }
    }
}
