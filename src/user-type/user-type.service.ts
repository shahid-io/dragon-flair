import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { UserTypeDto } from './dto';

@Injectable()
export class UserTypeService {
    constructor(
        private prisma: PrismaService
    ) { }

    async getAllUserTypes() {
        try {
            const data = await this.prisma.userType.findMany();
            return data;
        } catch (error) {
            throw error;
        }
    }
    async createUserType(dto: UserTypeDto) {
        try {
            const data = await this.prisma.userType.create({ data: dto });
            return data;
        } catch (error) {
            throw error;
        }
    }
}
