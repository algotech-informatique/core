import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DateRangeDto } from '../../base/dateRange.dto';

// @dynamic
export class ScheduleActivitiesSearchDto {

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    beginRealDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    endRealDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    workflowModelKey?: string[];

    @IsOptional()
    @IsArray()
    workflowInstanceUuid?: string[];
}
