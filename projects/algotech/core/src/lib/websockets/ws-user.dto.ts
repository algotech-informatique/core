import { IsString, IsEmail, IsUUID, IsUrl, IsOptional, IsNotEmpty, IsDefined, IsNumber } from 'class-validator';

export class WsUserDto {
    @IsUUID()
    @IsOptional()
    uuid?: string;

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

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    color: number;

    @IsUrl()
    @IsOptional()
    pictureUrl?: string;

    @IsOptional()
    focus?: {
        zone: string,
        pattern: string,
    };
}
