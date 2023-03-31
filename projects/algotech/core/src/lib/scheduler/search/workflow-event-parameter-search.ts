import { IsOptional, IsArray } from 'class-validator';

// @dynamic
export class ParametersSearchDto {

    @IsOptional()
    @IsArray()
    key?: string[];

    @IsOptional()
    @IsArray()
    source?: string[];
}