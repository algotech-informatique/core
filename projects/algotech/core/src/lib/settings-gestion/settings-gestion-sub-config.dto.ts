import { IsString, IsDefined, IsBoolean, IsArray, ValidateNested, IsOptional, IsUUID } from 'class-validator';
import { LangDto } from '../lang';
import { Type } from 'class-transformer';
import { SettingsGestionFunctionsDto } from './settings-gestion-functions.dto';

// @dynamic
export class SettingsGestionSubConfigDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

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
    @Type(() => SettingsGestionFunctionsDto)
    variables: SettingsGestionFunctionsDto[];

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}
