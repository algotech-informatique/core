import { IsDefined, IsString, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

// @dynamic
export class DocumentLockStateDto {
    @IsDefined()
    @IsUUID()
    userID: string;

    @IsDefined()
    @IsString()
    user: string; // firstname lastname

    @IsOptional()
    @Type(() => Date)
    date: string;
}
