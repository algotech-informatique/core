import { ValidateNested, IsArray, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { PlanGeneralDisplayDto } from './plan-general-display.dto';

// @dynamic
export class PlanGeneralSettingsDto {

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() =>  PlanGeneralDisplayDto)
    displayPlanSO: PlanGeneralDisplayDto;
}
