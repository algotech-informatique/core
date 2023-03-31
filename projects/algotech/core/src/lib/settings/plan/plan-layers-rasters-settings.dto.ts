import { ValidateNested, IsString, IsArray, IsNotEmpty, IsDefined, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { LangDto } from '../../lang';

// @dynamic
export class PlanLayersRastersSettingsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    uuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsString()
    backgroundColor: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsOptional()
    @IsString()
    url?: string;

}
