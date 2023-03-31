import { IsUUID, IsDefined, IsArray, ValidateNested, IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { WorkflowOperationDto } from './workflow-operation.dto';

// @dynamic
export class WorkflowStackTaskDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsUUID()
    @IsDefined()
    taskModel: string;

    @Type(() => Date)
    @IsDefined()
    startDate: string;

    @Type(() => Date)
    @IsOptional()
    finishDate: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowOperationDto)
    operations: WorkflowOperationDto[]; // difference A-B

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowOperationDto)
    reverse: WorkflowOperationDto[]; // difference B-A

    @IsBoolean()
    @IsDefined()
    active: boolean;

    @IsBoolean()
    @IsDefined()
    saved: boolean;
}
