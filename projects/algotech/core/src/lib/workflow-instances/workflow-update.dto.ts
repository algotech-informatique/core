import { IsString, IsDefined, IsArray, IsOptional, ValidateNested, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { WorkflowStackTaskDto } from './workflow-task-stack.dto';
import { WorkflowParticipantDto } from './workflow-participant.dto';
import { WorkflowDataDto } from './workflow-data.dto';

// @dynamic
export class WorkflowInstanceUpdateDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsOptional()
    @Type(() => Date)
    createdDate: string;

    @IsOptional()
    @Type(() => Date)
    startDate: string;

    @IsOptional()
    @Type(() => Date)
    updateDate: string;

    @IsOptional()
    @Type(() => Date)
    finishDate: string;

    @IsArray()
    @IsOptional()
    rangeDate?: string[];

    @IsString()
    @IsDefined()
    state: 'todo' | 'running' | 'finished' | 'canceled';

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowDataDto)
    data: WorkflowDataDto[];

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
}
