import { IsString, IsDefined, IsArray, IsOptional, IsUUID, IsBoolean, ValidateNested } from 'class-validator';
import { ServiceParamModelDto } from './service-param-model.dto';
import { Type } from 'class-transformer';
import { ServiceReturnModelDto } from './service-return-model.dto';
import { ServiceHeaderModelDto } from './service-header.model.dto';
import { PairDto } from '../../pair';

// @dynamic
export class ServiceModelDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

    @IsBoolean()
    @IsDefined()
    cache: boolean;

    @IsString()
    @IsDefined()
    execute: 'start' | 'end';

    @IsString()
    @IsDefined()
    api: 'algotech' | 'external';

    @IsString()
    @IsDefined()
    route: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => ServiceHeaderModelDto)
    header: ServiceHeaderModelDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => ServiceParamModelDto)
    params: ServiceParamModelDto[]; // 'url-segment' | 'request-body'

    @IsOptional()
    mappedParams?: PairDto[]; // skip:skip, limit:limit, search:value

    @IsString()
    @IsOptional()
    body?: string; // path to object

    @IsOptional()
    @ValidateNested()
    @Type(() => ServiceReturnModelDto)
    return?: ServiceReturnModelDto;
}
