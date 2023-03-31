import { PlanCardWidgetsDto } from './plan-card-widgets.dto';
import { ValidateNested, IsString, IsArray, IsNotEmpty, IsDefined, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { PlanPoiContentSettingsDto } from './plan-poi-content-settings.dto';
import { LangDto } from '../../lang';
import { PlanPoiSettingsCanvasDto } from './plan-poi-settings-canvas.dto';

// @dynamic
export class PlanPoiSettingsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    uuid: string;

    @IsString()
    icon: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    color: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => PlanPoiContentSettingsDto)
    content: PlanPoiContentSettingsDto;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    displayValue: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    toolTip: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    actionType: 'workflow' | 'property';

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    zoomMin: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    zoomMax: number;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    type: 'poi' | 'card';

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => PlanCardWidgetsDto)
    widgets: PlanCardWidgetsDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => PlanPoiSettingsCanvasDto)
    canvas?: PlanPoiSettingsCanvasDto;
}
