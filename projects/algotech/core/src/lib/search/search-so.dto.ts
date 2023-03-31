import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { SysQueryDto } from './sys-query.dto';

// @dynamic
export class SearchSODto extends SysQueryDto {
    @IsOptional()
    @IsString()
    modelKey?: string;

    @IsOptional()
    @IsBoolean()
    allModels?: boolean;

    @IsOptional()
    @IsBoolean()
    deleted?: boolean;

    @IsOptional()
    @IsBoolean()
    notIndexed?: boolean;

    @IsOptional()
    @ValidateNested()
    @Type(() => SysQueryDto)
    searchParameters?: SysQueryDto;
}
