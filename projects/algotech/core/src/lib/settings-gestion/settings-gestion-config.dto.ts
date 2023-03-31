import { IsString, IsDefined, IsArray, IsOptional, IsBoolean, ValidateNested, IsUUID } from 'class-validator';
import { LangDto } from '../lang';
import { BaseModel } from '../base';
import { Type } from 'class-transformer';
import { SettingsGestionSubConfigDto } from './settings-gestion-sub-config.dto';

// @dynamic
export class SettingsGestionConfigDto extends BaseModel {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsOptional()
    iconName?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Type(() => LangDto)
    description?: LangDto[];

    @IsString()
    @IsDefined()
    color: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SettingsGestionSubConfigDto)
    variables: SettingsGestionSubConfigDto[];

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}
