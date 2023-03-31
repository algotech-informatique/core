import { IsString, IsDefined, IsArray, IsUUID, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { PositionDto } from '../../shared';
import { LangDto } from '../../lang';
import { TaskTransitionDataModelDto } from './task-transition-data-model.dto';

// @dynamic
export class TaskTransitionModelDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsArray()
    @IsOptional()
    displayName?: LangDto[];

    @IsOptional()
    @IsUUID()
    task: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => TaskTransitionDataModelDto)
    data: TaskTransitionDataModelDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => PositionDto)
    position?: PositionDto;
}
