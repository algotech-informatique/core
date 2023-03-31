import { IsString, IsEmail, IsNotEmpty, IsDefined } from 'class-validator';

// @dynamic
export class AdminUserDto {

    @IsString()
    @IsDefined()
    customerKey: string;

    @IsString()
    @IsDefined()
    preferedLang: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    login: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsDefined()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    lastName: string;

}
