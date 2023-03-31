import { SmartPropertyObjectDto } from './smart-property-object.dto';
import { ATSkillsDto } from '../atskills';
import { BaseModel } from '../base';
import { IsDefined, IsString, IsArray, ValidateNested, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { IndexStatus } from '../idexation/indexation-status.type.dto';

// @dynamic
export class SmartObjectDto extends BaseModel {

    @IsDefined()
    @IsString()
    modelKey: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SmartPropertyObjectDto)
    properties: SmartPropertyObjectDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => ATSkillsDto)
    skills: ATSkillsDto;

    @IsOptional()
    @IsBoolean()
    local?: boolean;
}
