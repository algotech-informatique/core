import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PairDto } from '../pair';
import { SysQueryDto } from '../search';

// @dynamic
export class WorkflowLaunchOptionsDto {
    @IsString()
    @IsOptional()
    key?: string;

    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Type(() => PairDto)
    inputs?: PairDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => SysQueryDto)
    searchParameters?: SysQueryDto;

    @IsBoolean()
    @IsOptional()
    readonly?: boolean;

    @IsBoolean()
    @IsOptional()
    toData?: boolean;

    @IsBoolean()
    @IsOptional()
    metrics?: boolean;

    @IsBoolean()
    @IsOptional()
    fromScheduler?: boolean;
}
