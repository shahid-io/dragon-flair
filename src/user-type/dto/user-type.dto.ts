import { IsNotEmpty, IsString, } from "class-validator";

// export class UserTypeInput {
//     @IsNotEmpty()
//     @IsString()
//     userType: string
// }

export class UserTypeDto{
    @IsNotEmpty()
    @IsString()
    userType: string
}