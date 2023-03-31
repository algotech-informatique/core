import { IsString, IsNotEmpty, IsDefined, IsOptional } from 'class-validator';

export class SignInDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    readonly login: string;

    @IsString()
    @IsOptional()
    mobileToken?: string;
}
