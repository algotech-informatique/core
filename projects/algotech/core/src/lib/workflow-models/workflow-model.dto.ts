import { IsString, IsDefined, IsArray, IsOptional, ValidateNested, IsNumber } from 'class-validator';
import { LangDto } from '../lang';
import { BaseModel } from '../base';
import { WorkflowVariableModelDto } from './workflow-variable-model.dto';
import { WorkflowStepModelDto } from './workflow-step-model.dto';
import { Type, Expose } from 'class-transformer';
import { WorkflowProfilModelDto } from './workflow-profil-model.dto';
import { PairDto } from '../pair';
import { WorkflowApiModelDto } from './workflow-api-model.dto';

// @dynamic
export class WorkflowModelDto extends BaseModel {
    @IsString()
    @IsDefined()
    @Expose({groups: ['mobile']})
    key: string;

    @IsString()
    @IsOptional()
    snModelUuid?: string;

    @IsString()
    @IsOptional() // todo change v2
    viewId?: string;

    @IsNumber()
    @IsOptional() // todo change v2
    viewVersion?: number;

    @IsOptional()
    @IsString()
    connectorUuid?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Expose({groups: ['mobile', 'display', 'system']})
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Expose({groups: ['mobile', 'display', 'system']})
    @Type(() => LangDto)
    description?: LangDto[];

    @IsArray()
    @IsDefined()
    tags: string[];

    @IsString()
    @IsOptional()
    @Expose({groups: ['mobile', 'display', 'system']})
    iconName?: string;

    @IsArray()
    @IsOptional() // todo change v2
    @ValidateNested()
    @Type(() => PairDto)
    parameters?: PairDto[];

    @IsArray()
    @IsDefined()
    @Expose({groups: ['system']})
    @ValidateNested()
    @Type(() => WorkflowVariableModelDto)
    variables: WorkflowVariableModelDto[];

    @IsArray()
    @IsDefined()
    @Expose({groups: ['system']})
    @ValidateNested()
    @Type(() => WorkflowProfilModelDto)
    profiles: WorkflowProfilModelDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowStepModelDto)
    steps: WorkflowStepModelDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => WorkflowApiModelDto)
    api?: WorkflowApiModelDto;
}
