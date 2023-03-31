import { IsArray, IsString, IsDefined, IsBoolean, IsOptional, ValidateNested, IsUUID } from 'class-validator';
import { SmartPermissionsDto } from './smart-permissions.dto';
import { LangDto } from '../lang';
import { Type } from 'class-transformer';

// @dynamic
export class SmartPropertyModelDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsDefined()
    @IsString()
    key: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsString()
    @IsDefined()
    keyType: string;

    @IsBoolean()
    @IsDefined()
    multiple: boolean;

    @IsOptional()
    items?: string|string[]; // glist key or items

    @IsOptional()
    composition?: boolean;

    @IsOptional()
    defaultValue?: any;

    @IsBoolean()
    @IsDefined()
    required: boolean;

    @IsBoolean()
    @IsDefined()
    system: boolean;

    @IsBoolean()
    @IsDefined()
    hidden: boolean;

    @IsOptional()
    @IsArray()
    validations?: string[]; // list of regex

    @IsDefined()
    @ValidateNested()
    @Type(() => SmartPermissionsDto)
    permissions: SmartPermissionsDto;

    @IsOptional()
    @IsString()
    description?: string;

}
