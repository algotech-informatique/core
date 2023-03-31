import { IsString, IsDefined, IsOptional } from 'class-validator';

// @dynamic
export class NotificationActionDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsOptional()
    object?: string;
}
