import { IsString, IsDefined, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LangDto } from '../lang';

// @dynamic
export class OptionListDto {

    @IsString()
    @IsDefined()
    key: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

}
