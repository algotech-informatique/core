import { ParametersSearchDto } from './workflow-event-parameter-search';
import { ProfilsSearchDto } from './workflow-settings-securityGroups-search';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// @dynamic
export class ScheduleWorkflowsSearchDto {

    @IsOptional()
    @IsArray()
    workflowUuid?: string[];

    @IsOptional()
    @ValidateNested()
    @Type(() => ParametersSearchDto)
    parameters?: ParametersSearchDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ProfilsSearchDto)
    profils?: ProfilsSearchDto;
}
