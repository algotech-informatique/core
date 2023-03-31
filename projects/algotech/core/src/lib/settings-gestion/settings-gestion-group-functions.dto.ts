import { IsString, IsDefined, IsArray, ValidateNested, IsOptional, IsUUID } from 'class-validator';
import { LangDto } from '../lang';
import { Type } from 'class-transformer';


// @dynamic
export class SettingsGestionGroupFunctionsDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Type(() => LangDto)
    description?: LangDto[];
}