import { ValidateNested, IsString, IsArray, IsNotEmpty, IsDefined } from 'class-validator';
import { PlanGeneralDisplayPropertyDto } from './plan-general-display-property.dto';
import { Type } from 'class-transformer';

// @dynamic
export class PlanGeneralDisplayDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    uuid: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() =>  PlanGeneralDisplayPropertyDto)
    propertyList: PlanGeneralDisplayPropertyDto[];

}
