import { SmartPropertyModelDto } from './smart-property-model.dto';
import { IsString, IsDefined, IsBoolean, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { SmartPermissionsDto } from './smart-permissions.dto';
import { ATSkillsActiveDto } from '../atskills/atskills-active.dto';
import { LangDto } from '../lang';
import { BaseModel } from '../base';
import { Type } from 'class-transformer';

// @dynamic
export class SmartModelDto extends BaseModel {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsOptional()
    domainKey: string;

    @IsBoolean()
    @IsDefined()
    system: boolean;

    @IsOptional()
    @IsDefined()
    uniqueKeys: string[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SmartPropertyModelDto)
    properties: SmartPropertyModelDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => ATSkillsActiveDto)
    skills: ATSkillsActiveDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => SmartPermissionsDto)
    permissions: SmartPermissionsDto;

    @IsOptional()
    @IsString()
    description?: string;

}
