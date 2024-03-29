import { IsEmail, IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class SignUpDto {
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
    @IsNumber()
    status?: number;
    @IsNumber()
    userTypeId?: number;

}

export class SignInDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}