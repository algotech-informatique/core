import { IsString, IsDefined, IsUUID, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { TaskGeneralModelDto } from './task-general-model.dto';
import { TaskPropertyModelDto } from './task-property-model.dto';
import { PositionDto } from '../../shared';

// @dynamic
export class TaskModelDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    type: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => TaskGeneralModelDto)
    general: TaskGeneralModelDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => TaskPropertyModelDto)
    properties: TaskPropertyModelDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => PositionDto)
    position?: PositionDto;
}
