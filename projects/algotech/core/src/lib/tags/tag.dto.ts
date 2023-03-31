import { BaseModel } from '../base';
import { IsDefined, IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { LangDto } from '../lang/lang.dto';
import { Type } from 'class-transformer';

// @dynamic
export class TagDto extends BaseModel {

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    key: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsDefined()
    @IsString()
    color: string;
}
