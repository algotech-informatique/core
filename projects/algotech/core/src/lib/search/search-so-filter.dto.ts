import { Type } from 'class-transformer';
import { IsDefined, IsOptional, IsString, ValidateNested } from 'class-validator';
import { SearchSOFilterValueDto } from './search-so-filter-value.dto';

// @dynamic
export class SearchSOFilterDto {
    type?: 'filter' | 'query';
    allKeys?: boolean;

    @IsOptional()
    @IsString()
    key?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => SearchSOFilterValueDto)
    value: SearchSOFilterValueDto;
}
