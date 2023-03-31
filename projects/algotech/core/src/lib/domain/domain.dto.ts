import { IsString, IsDefined, IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { LangDto } from '../lang';
import { BaseModel } from '../base';
import { Type } from 'class-transformer';

// @dynamic
export class DomainDto extends BaseModel {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    key: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: Array<LangDto>;
}
