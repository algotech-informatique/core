import { IsOptional, ValidateNested, IsString, IsArray, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { DateRangeDto } from '../base/dateRange.dto';

// @dynamic
export class ScheduleDateSearchDto {

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
    @IsUUID()
    soUuid?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    scheduleTypeKeys?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    scheduleStatusKey?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    tags?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID()
    assignedUserUuid?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    title?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID()
    emitterUuid?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID()
    receiversuserUuids?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID()
    receiversgroupUuids?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    receiverspermission?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID()
    workflowsUuids?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    workflowsparameterskey?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    workflowsparameterssource?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    workflowsprofilsprofil?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    workflowsprofilsgroup?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    workflowsprofilslogin?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    repetitionMode?: string[];


    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    activitiesbeginRealDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DateRangeDto)
    activitiesendRealDate?: DateRangeDto[];

    @IsOptional()
    @IsArray()
    @IsString()
    activitiesworkflowModelKeys?: string[];

    @IsOptional()
    @IsArray()
    @IsUUID()
    activitiesworkflowInstanceUuids?: string[];

    @IsOptional()
    @IsArray()
    @IsString()
    source?: string[];

}
