import { IsOptional, IsArray } from 'class-validator';

// @dynamic
export class ScheduleStatusSearchDto {

    @IsOptional()
    @IsArray()
    key?: string[];
}
