import { IsDefined, IsUUID, ValidateNested, IsArray } from 'class-validator';
import { WorkflowEventParameterDto, WorkflowSettingsSecurityGroupsDto } from '../settings';
import { Type } from 'class-transformer';

// @dynamic
export class ScheduleWorkflowDto {

    @IsDefined()
    @IsUUID()
    workflowUuid: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowEventParameterDto)
    parameters: WorkflowEventParameterDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowSettingsSecurityGroupsDto)
    profils: WorkflowSettingsSecurityGroupsDto[];

}
