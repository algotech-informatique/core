import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BaseModel } from '../base';
import { LangDto } from '../lang';
import { SnAppDto } from '../smart-nodes';

// @dynamic
export class ApplicationModelDto extends BaseModel {

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsOptional()
    snModelUuid?: string;

    @IsString()
    @IsOptional() // todo change v2
    appId?: string;

    @IsNumber()
    @IsOptional() // todo change v2
    appVersion?: number;

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
    environment: string;

    @IsDefined()
    snApp: SnAppDto;
}
