import { IsString, IsDefined, IsArray, IsOptional, ValidateNested, IsBoolean } from 'class-validator';
import { BaseModel } from '../base';
import { Type } from 'class-transformer';
import { WorkflowModelDto } from '../workflow-models';
import { WorkflowStackTaskDto } from './workflow-task-stack.dto';
import { WorkflowOperationDto } from './workflow-operation.dto';
import { SmartObjectDto } from '../smart-objects';
import { WorkflowSettingsDto } from '../settings';
import { WorkflowParticipantDto } from './workflow-participant.dto';
import { WorkflowDataDto } from './workflow-data.dto';
import { DocumentDto } from '../documents';
import { WorkflowInstanceContextDto } from './workflow-context.dto';
import { PairDto } from '../pair';

// @dynamic
export class WorkflowInstanceDto extends BaseModel {
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowModelDto)
    workflowModel: WorkflowModelDto; // copy of workflow model

    @IsOptional()
    @Type(() => Date)
    startDate: string;

    @IsOptional()
    @Type(() => Date)
    finishDate: string;

    @IsArray()
    @IsOptional()
    rangeDate?: string[];

    @IsString()
    @IsDefined()
    state: 'todo' | 'running' | 'finished' | 'canceled';

    @IsBoolean()
    saved?: boolean;

    @IsOptional()
    @ValidateNested()
    @Type(() => WorkflowSettingsDto)
    settings?: WorkflowSettingsDto;

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => SmartObjectDto)
    smartobjects?: SmartObjectDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => DocumentDto)
    documents?: DocumentDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowDataDto)
    data: WorkflowDataDto[]; // état des données + services à l'instant T (CALCULATE)

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowParticipantDto)
    participants: WorkflowParticipantDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowStackTaskDto)
    stackTasks: WorkflowStackTaskDto[];
    // stack des tâches jouées avec le patch correspondant à la modification à apportée à chacune des données

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => PairDto)
    stackData?: PairDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowOperationDto)
    operations?: WorkflowOperationDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => WorkflowInstanceContextDto)
    context?: WorkflowInstanceContextDto;
}
