import { IsString, IsNotEmpty, IsDefined, IsArray, ValidateNested, IsOptional, IsBoolean } from 'class-validator';
import { LangDto } from '../lang';
import { BaseModel } from '../base';
import { Type } from 'class-transformer';
import { CustomerOAuth2Dto } from './customer-oauth2.dto';

// @dynamic
export class CustomerDto extends BaseModel {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    customerKey: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsString()
    logoUrl: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    languages: Array<LangDto>;

    @IsArray()
    @IsDefined()
    applicationsKeys: Array<string>;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    licenceKey: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CustomerOAuth2Dto)
    oauth2?: CustomerOAuth2Dto;    

    @IsOptional()
    @IsString()
    catchboxUrl?: string;

    @IsOptional()
    @IsString()
    dataretreiverUrl?: string;
}
