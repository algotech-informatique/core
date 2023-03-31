import { IsDefined, IsString } from 'class-validator';

// @dynamic
export class SmartLinkLoginDto {

    @IsString()
    @IsDefined()
    user: string;

    @IsString()
    @IsDefined()
    password: string;

}
