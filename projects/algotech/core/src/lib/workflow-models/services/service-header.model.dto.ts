import { IsString, IsDefined } from 'class-validator';

// @dynamic
export class ServiceHeaderModelDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    value: string;
}
