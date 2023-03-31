import { Expose, Type } from 'class-transformer';
import { IsArray, IsDefined, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BaseModel } from '../base';
import { LangDto } from '../lang';
import { SnPageDto } from '../smart-nodes';

// @dynamic
export class PageModelDto extends BaseModel {

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsOptional()
    snModelUuid?: string;

    @IsString()
    @IsOptional() // todo change v2
    pageId?: string;

    @IsNumber()
    @IsOptional() // todo change v2
    pageVersion?: number;

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
    snPage: SnPageDto;
}
