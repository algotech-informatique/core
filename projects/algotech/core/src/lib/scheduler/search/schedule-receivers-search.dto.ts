import { IsOptional, IsArray } from 'class-validator';

// @dynamic
export class ScheduleReceiversSearchDto {

    @IsOptional()
    @IsArray()
    userUuid?: string[];

    @IsOptional()
    @IsArray()
    groupUuid?: string[];

    @IsOptional()
    @IsArray()
    permission?: string[];
}
