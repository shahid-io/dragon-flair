import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'

@Injectable({})
export class AuthService {

    constructor(private prismaService: PrismaService) { }
    async signup(dto: AuthDto) {

        const password = await argon.hash(dto.password);
        console.log(password);
        const user = await this.prismaService.user.create({
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                city: dto.city,
                postalCode: dto.postalCode,
                phone: dto.phone,
                email: dto.email,
                password,
            },
            select: {
                id: true, firstName: true, lastName: true, email: true
            }
        });
        return user;

    }
    signin() {

    }
}