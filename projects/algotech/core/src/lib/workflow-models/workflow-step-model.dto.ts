import { IsString, IsDefined, IsArray, ValidateNested, IsUUID, IsOptional } from 'class-validator';
import { LangDto } from '../lang';
import { TaskModelDto } from './task-models/task-model.dto';
import { Type } from 'class-transformer';

// @dynamic
export class WorkflowStepModelDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsString()
    @IsOptional()
    color?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => TaskModelDto)
    tasks: TaskModelDto[];
}
