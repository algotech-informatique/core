import { IsString, IsDefined, IsArray, IsBoolean, ValidateNested, IsOptional, IsUUID } from 'class-validator';
import { LangDto } from '../lang';
import { Type } from 'class-transformer';
import { SettingsGestionGroupFunctionsDto } from './settings-gestion-group-functions.dto';

// @dynamic
export class SettingsGestionFunctionsDto {
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
    groupName : SettingsGestionGroupFunctionsDto;

    @IsBoolean()
    @IsOptional()
    active?: boolean; 
}
