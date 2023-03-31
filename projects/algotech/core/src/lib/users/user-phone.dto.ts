import { IsString, IsDefined, IsNotEmpty } from 'class-validator';

export class UserPhoneDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    phoneType: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    phoneNumber: string;
}
