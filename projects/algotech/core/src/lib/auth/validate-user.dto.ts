import { IsString, IsNotEmpty, IsDefined, IsNumber } from 'class-validator';

export class ValidateUserDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    readonly login: string;

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    readonly endToken: number;
}
