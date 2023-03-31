import { ValidateNested, IsString, IsNumber, IsArray, IsOptional, IsNotEmpty, IsDefined, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { LangDto } from '../../lang';
import { PlanLayersRastersSettingsDto } from './plan-layers-rasters-settings.dto';
import { MetaDatasDto } from '../../metadata/metadatas.dto';
import { PlanLayersIframeSettingsDto } from './plan-layers-iframe-settings.dto';

// @dynamic
export class PlanLayersSettingsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    layerType: 'mapWorld' | 'mapCustom' | 'iframe';

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    uuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => PlanLayersRastersSettingsDto)
    rasters: PlanLayersRastersSettingsDto[];

    @IsNumber()
    @IsDefined()
    defaultZoom: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    zoomMin: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    zoomMax: number;

    @IsArray()
    @IsDefined()
    defaultCenter: number[];

    @IsString()
    defaultRaster: string;

    @IsOptional()
    @IsBoolean()
    clustersMode?: boolean;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => MetaDatasDto)
    metadatas: MetaDatasDto[];

    @ValidateNested()
    @Type(() => PlanLayersIframeSettingsDto)
    iframe?: PlanLayersIframeSettingsDto;
}
