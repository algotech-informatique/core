import { IsUUID, IsDefined, IsString, IsBoolean, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { SnParamDto } from './smart-nodes-param.dto';
import { LangDto } from '../lang';

// @dynamic
export class SnSectionDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsDefined()
    displayName: LangDto[] | string;

    @IsString()
    @IsDefined()
    key: string;

    @IsBoolean()
    @IsDefined()
    editable: boolean;

    @IsBoolean()
    @IsDefined()
    open: boolean;

    @IsOptional()
    @IsBoolean()
    hidden?: boolean;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnParamDto)
    params: SnParamDto[];
}
