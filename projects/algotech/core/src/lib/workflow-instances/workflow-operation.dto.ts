import { IsDefined, IsString, IsOptional, IsBoolean } from 'class-validator';
import { WorkflowTaskActionDto } from './workflow-task-action.dto';
import { CrudDto } from '../base/crud.dto';

// @dynamic
export class WorkflowOperationDto {
    @IsString()
    @IsDefined()
    type: 'action' | 'crud';

    @IsDefined()
    value: WorkflowTaskActionDto | CrudDto;

    @IsOptional()
    @IsBoolean()
    saveOnApi?: boolean;

    @IsOptional()
    @IsBoolean()
    requireInstance?: boolean;
}
