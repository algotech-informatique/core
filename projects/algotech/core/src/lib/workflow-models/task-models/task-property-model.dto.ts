import { IsDefined, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { ServiceModelDto } from '../services/service-model.dto';
import { TaskTransitionModelDto } from './task-transition-model.dto';
import { Type } from 'class-transformer';
import { WorkflowExpressionDto } from './workflow-expression-model.dto';

// @dynamic
export class TaskPropertyModelDto {
    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => ServiceModelDto)
    services: ServiceModelDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => WorkflowExpressionDto)
    expressions?: WorkflowExpressionDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => TaskTransitionModelDto)
    transitions: TaskTransitionModelDto[];

    @IsDefined()
    custom: any;
}
