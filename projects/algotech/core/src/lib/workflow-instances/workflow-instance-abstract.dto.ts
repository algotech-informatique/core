import { IsString, IsDefined, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { WorkflowParticipantDto } from './workflow-participant.dto';

// @dynamic
export class WorkflowInstanceAbstractDto {
    @IsDefined()
    @IsString()
    uuid: string;

    @IsDefined()
    @IsString()
    workflowModelUuid: string;

    @IsOptional()
    @Type(() => Date)
    startDate: string;

    @Type(() => Date)
    @IsOptional()
    updateDate?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowParticipantDto)
    participants: WorkflowParticipantDto[];

    @IsDefined()
    @IsString()
    activeTask: string;
}
