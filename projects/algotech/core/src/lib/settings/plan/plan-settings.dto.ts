import { ValidateNested, IsArray, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { PlanGeneralSettingsDto } from './plan-general-settings.dto';
import { PlanPoiSettingsDto } from './plan-poi-settings.dto';
import { PlanContainersSettingsDto } from './plan-containers-settings.dto';

// @dynamic
export class PlanSettingsDto {

    @IsDefined()
    @ValidateNested()
    @Type(() => PlanGeneralSettingsDto)
    general: PlanGeneralSettingsDto;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => PlanPoiSettingsDto)
    poi: PlanPoiSettingsDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => PlanContainersSettingsDto)
    containers: PlanContainersSettingsDto[];

}

