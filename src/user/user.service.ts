import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async getAllUsers() {
        try {
            const data = await this.prisma.user.findMany({
                select: {
                    firstName: true,
                    lastName: true,
                    city: true,
                    phone: true,
                    email: true,
                    postalCode: true,
                    createdAt: true,
                    updatedAt: true,
                }
            });
            return data;
        } catch (error) {
            throw error;
        }
    }
}
