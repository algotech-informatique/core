import { IsString, IsOptional, IsNotEmpty, IsDefined, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PlanLayersIframeEventSettingsDto } from './plan-layers-iframe-event-settings.dto';


// @dynamic
export class PlanLayersIframeSettingsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    url: string;

    @IsDefined()
    @IsArray()
    properties: {key: string; value: string}[];

    @ValidateNested()
    @IsOptional()
    @Type(() => PlanLayersIframeEventSettingsDto)
    event?: PlanLayersIframeEventSettingsDto;
}
