import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
    @IsNotEmpty()
    @IsString()
    city: string;
    @IsNotEmpty()
    postalCode: string;
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}