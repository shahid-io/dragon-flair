import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";

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
}
