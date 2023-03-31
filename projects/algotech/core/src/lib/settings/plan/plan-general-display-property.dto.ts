import { ValidateNested, IsString, IsArray, IsNotEmpty, IsDefined } from 'class-validator';
import { PlanGeneralDisplaySmartModelDto } from './plan-general-display-smart-model.dto';
import { Type } from 'class-transformer';

// @dynamic
export class PlanGeneralDisplayPropertyDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() =>  PlanGeneralDisplaySmartModelDto)
    smartModel: PlanGeneralDisplaySmartModelDto[];
}
