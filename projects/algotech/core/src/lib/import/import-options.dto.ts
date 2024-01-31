import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { PairDto } from '../pair';

// @dynamic
export class ImportOptionsDto {
    @IsOptional()
    @IsString()
    delimiter?: string;

    @IsOptional()
    @IsString()
    newline?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => PairDto)
    columns?: PairDto[];

    @IsOptional()
    @IsString()
    dateDefaultFormat?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => PairDto)
    propertiesFormat?: PairDto[];

    @IsOptional()
    @IsString()
    encoding?: string;
}