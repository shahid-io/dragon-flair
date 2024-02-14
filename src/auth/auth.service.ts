import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignUpDto, SignInDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientInitializationError, PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Constants, ErrorCodes } from "../utils/common"

@Injectable({})
export class AuthService {

    constructor(private prismaService: PrismaService) { }
    async signup(dto: SignUpDto) {
        try {
            const password = await argon.hash(dto.password);
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
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === ErrorCodes.UniqueConstraintViolation) {
                    throw new ForbiddenException(Constants.EMAIL_ID_TAKEN);
                }
            } else if (error instanceof PrismaClientInitializationError) {
                console.error('Failed to Initialize Prisma Client: ', error.message);
                process.exit(1);
            }
            console.log(error.name)
            throw error;
        }

    }
    async signin(dto: SignInDto) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: {
                    email: dto.email
                }
            })
            if (!user) {
                throw new ForbiddenException(Constants.INCORRECT_CREDENTIALS);
            }
            const compare = await argon.verify(user.password, dto.password);
            if (!compare) {
                throw new ForbiddenException(Constants.PASSWORD_INCORRECT);
            }
            delete user.password;
            return user;
        } catch (error) {
            throw error;
        }
    }
}