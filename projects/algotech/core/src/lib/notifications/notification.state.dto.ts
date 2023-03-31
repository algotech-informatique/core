import { IsString, IsArray, IsDefined, IsOptional } from 'class-validator';

// @dynamic
export class NotificationStateDto {
    @IsString()
    @IsDefined()
    from: string;

    @IsArray()
    @IsDefined()
    to: string[];

    @IsArray()
    @IsDefined()
    read: string[];

    @IsString()
    @IsOptional()
    execute?: string;
}
