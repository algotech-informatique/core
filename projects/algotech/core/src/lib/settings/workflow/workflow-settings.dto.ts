import { IsDefined, IsArray, ValidateNested, IsNotEmpty, IsString, IsUUID, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { WorkflowSettingsSecurityGroupsDto } from './workflow-settings-security-groups.dto';
import { WorkflowSettingsFilterDto } from './workflow-settings-filter.dto';

// @dynamic
export class WorkflowSettingsDto {

    @IsUUID()
    @IsOptional()
    uuid?: string;

    @IsString()
    context: string;

    @IsArray()
    platforms: string[];

    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowSettingsFilterDto)
    filters: WorkflowSettingsFilterDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowSettingsSecurityGroupsDto)
    securityGroup: WorkflowSettingsSecurityGroupsDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    workflowUuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    savingMode: string;

    @IsBoolean()
    @IsOptional()
    unique?: boolean;
}
