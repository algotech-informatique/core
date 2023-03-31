import { ValidateNested, IsString, IsArray, IsOptional, IsNotEmpty, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { LangDto } from '../../lang';
import { PlanLayersSettingsDto } from './plan-layers-settings.dto';
import { MetaDatasDto } from '../../metadata/metadatas.dto';

// @dynamic
export class PlanContainersSettingsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    uuid: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    description: LangDto[];

    @IsString()
    metadataSoUuid: string;

    @IsArray()
    imageIds: string[];

    @IsOptional()
    parentUuid: string;

    @IsOptional()
    @IsString()
    defaultLayer?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => PlanLayersSettingsDto)
    layers: PlanLayersSettingsDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => MetaDatasDto)
    metadatas: MetaDatasDto[];

}
