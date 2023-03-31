import { ValidateNested, IsString, IsArray, IsNotEmpty, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { LangDto } from '../lang';

// @dynamic
export class MetaDatasDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    uuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    value: string;
}
