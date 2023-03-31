import { IsDefined, IsUUID, IsOptional, ValidateNested, IsNotEmpty, Validate, IsArray, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { DateStringFormat } from '../elejson/dateValidationConstraint';
import { ScheduleReceiverDto } from './schedule-receiver.dto';
import { ScheduleActivityDto } from './schedule-activity.dto';
import { ScheduleWorkflowDto } from './schedule-workflow.dto';
import { BaseModel } from '../base';
import { GenericListValueDto } from '../glists';

// @dynamic
export class ScheduleDto extends BaseModel {

    @IsDefined()
    @IsString()
    scheduleTypeKey: string;

    @IsOptional()
    @IsString()
    title: string;

    @IsDefined()
    @IsNotEmpty()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    creationDate: string;

    @IsDefined()
    @IsNotEmpty()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    beginPlannedDate: string;

    @IsDefined()
    @IsNotEmpty()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    endPlannedDate: string;

    @IsDefined()
    @IsUUID()
    emitterUuid: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => ScheduleReceiverDto)
    receivers: ScheduleReceiverDto[];

    @IsDefined()
    @IsArray()
    soUuid: string[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => ScheduleWorkflowDto)
    workflows: ScheduleWorkflowDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    repetitionMode: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

    @IsDefined()
    @IsString()
    scheduleStatus: string;

    @IsDefined()
    @IsArray()
    tags: string[];

    @IsOptional()
    @IsArray()
    assignedUserUuid?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => ScheduleActivityDto)
    activities?: ScheduleActivityDto[];

    @IsString()
    source: string;
}
