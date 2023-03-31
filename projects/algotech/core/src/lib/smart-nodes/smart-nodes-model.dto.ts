import { BaseModel } from '../base';
import { IsDefined, IsString, IsOptional, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SnVersionDto } from './smart-nodes-version.dto';
import { LangDto } from '../lang';

// @dynamic
export class SnModelDto extends BaseModel {

    @IsDefined()
    @IsString()
    key: string;

    @IsArray()
    @IsDefined()
    displayName: LangDto[];

    @IsOptional()
    @IsString()
    dirUuid?: string;

    @IsDefined()
    @IsString()
    type: string;

    @IsOptional()
    @IsString()
    publishedVersion?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnVersionDto)
    versions: SnVersionDto[];

}
