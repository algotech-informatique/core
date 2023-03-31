import { IsString, IsDefined, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { LangDto } from '../../lang';
import { Type } from 'class-transformer';

// @dynamic
export class TaskGeneralModelDto {
    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsString()
    @IsOptional()
    iconName?: string;

    @IsString()
    @IsOptional()
    profil?: string;
}
