import { IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { DateRangeDto } from '../../base/dateRange.dto';
import { ScheduleActivitiesSearchDto } from './schedule-activities-search.dto';
import { ScheduleStatusSearchDto } from './schedule-status-search.dto';
import { ScheduleWorkflowsSearchDto } from './schedule-workflows-search.dto';
import { ScheduleReceiversSearchDto } from './schedule-receivers-search.dto';

// @dynamic
export class ScheduleSearchDto {

    @IsOptional()
    @IsArray()
    uuid?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    creationDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    beginPlannedDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    endPlannedDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    soUuid?: string[];

    @IsOptional()
    @IsArray()
    scheduleTypeKey?: string[];

    @IsOptional()
    @IsArray()
    tags?: string[];

    @IsOptional()
    @IsArray()
    assignedUserUuid?: string[];

    @IsOptional()
    @IsArray()
    title?: string[];

    @IsOptional()
    @IsArray()
    emitterUuid?: string[];

    @IsOptional()
    @IsArray()
    repetitionMode?: string[];

    @IsOptional()
    @IsArray()
    source?: string[];

    @IsOptional()
    @ValidateNested()
    @Type(() => ScheduleStatusSearchDto)
    scheduleStatus?: ScheduleStatusSearchDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ScheduleReceiversSearchDto)
    receivers?: ScheduleReceiversSearchDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ScheduleWorkflowsSearchDto)
    workflows?: ScheduleWorkflowsSearchDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ScheduleActivitiesSearchDto)
    activities?: ScheduleActivitiesSearchDto;

}
