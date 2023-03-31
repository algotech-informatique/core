import { Type } from 'class-transformer';
import { IsDefined, IsString, ValidateNested } from 'class-validator';
import { UserDto } from '../users';

// @dynamic
export class ResponseSignIn {
    @IsDefined()
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto;

    @IsDefined()
    @IsString()
    key: string;

    @IsDefined()
    @IsString()
    encryptedPassword: string;

    @IsString()
    blockedToken: string;
}
