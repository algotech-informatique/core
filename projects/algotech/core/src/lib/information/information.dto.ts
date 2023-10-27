import { IsOptional, IsString } from 'class-validator';

// @dynamic
export class InformationDto {
    @IsString()
    date: string;

    @IsString()
    restoreId?: string;

    @IsString()
    version?: string;
}
