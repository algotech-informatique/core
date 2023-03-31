import { BaseModel } from '../base';
import { IsDefined, IsArray, ValidateNested, IsBoolean, IsOptional, IsString } from 'class-validator';
import { PairDto } from '../pair';
import { Type } from 'class-transformer';
import { SmartTaskPeriodicityDto } from './smart-task.periodicity.dto';

// @dynamic
export class SmartTaskDto extends BaseModel {

    @IsDefined()
    @IsBoolean()
    enabled: boolean;

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => SmartTaskPeriodicityDto)
    periodicity: SmartTaskPeriodicityDto;

    @IsDefined()
    @IsString()
    priority: 'highest' | 'high' | 'normal' | 'low' | 'lowest';

    @IsDefined()
    @IsString()
    flowKey: string;

    @IsDefined()
    @IsString()
    flowType: 'smartflow' | 'workflow' | 'mail' | 'notify';

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => PairDto)
    inputs?: PairDto[];

    @IsDefined()
    @IsString()
    userUuid: string;

    @IsOptional()
    @IsString()
    dirUuid?: string;

    @IsOptional()
    @IsString()
    nextRunAt?: string;
}
