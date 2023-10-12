import { SnElementDto } from './smart-nodes-element.dto';
import { IsString, IsDefined, IsArray, IsOptional, IsBoolean } from 'class-validator';

// @dynamic
export class SnSynoticSearchQueryDto {

    @IsArray()
    @IsOptional()
    versions?: string[];

    @IsString()
    @IsOptional()
    ressource?: string;

    @IsString()
    @IsOptional()
    search?: string;

    @IsBoolean()
    @IsOptional()
    caseSensitive?: boolean;

    @IsBoolean()
    @IsOptional()
    exactValue?: boolean;    
}
