import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PairDto } from '../pair';
import { SearchSOFilterDto } from './search-so-filter.dto';

// @dynamic
export class SysQueryDto {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => SearchSOFilterDto)
    filter?: SearchSOFilterDto[];

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => PairDto)
    order?: PairDto[];

    @IsOptional()
    @IsNumber()
    skip?: number;

    @IsOptional()
    @IsNumber()
    limit?: number;
}