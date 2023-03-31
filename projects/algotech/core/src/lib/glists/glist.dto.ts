import { ValidateNested, IsString, IsArray, IsNotEmpty, IsDefined, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../base';
import { LangDto } from '../lang';
import { GenericListValueDto } from './glist-value.dto';

// @dynamic
export class GenericListDto extends BaseModel {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    key: string;

    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    @IsDefined()
    displayName: LangDto[];

    @IsDefined()
    @IsBoolean()
    protected: boolean;

    @IsArray()
    @ValidateNested()
    @Type(() => GenericListValueDto)
    @IsDefined()
    values: GenericListValueDto[];
}
