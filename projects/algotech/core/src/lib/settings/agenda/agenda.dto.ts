import { IsDefined, ValidateNested, IsArray, IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';
import { BaseModel } from '../../base';
import { Type } from 'class-transformer';
import { LangDto } from '../../lang';
import { ScheduleTypeDisplay } from './scheduler/schedule-type-display.dto';
import { ScheduleWorkflowDto, ScheduleReceiverDto } from '../../scheduler';

// @dynamic
export class AgendaTypeDto extends BaseModel {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    owner: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    workflowUuid: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => ScheduleTypeDisplay)
    displays: ScheduleTypeDisplay[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => ScheduleWorkflowDto)
    defaultWorkflowModels: ScheduleWorkflowDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => ScheduleReceiverDto)
    defaultReceivers: ScheduleReceiverDto[];

    @IsDefined()
    @IsArray()
    defaultTags: string[];

    @IsDefined()
    @IsBoolean()
    attribuable: boolean;

    @IsDefined()
    @IsNumber()
    attributionMaxNumber: number;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    statutGroupList: string;
}
