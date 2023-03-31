import { BaseModel } from '../base';
import { IsDefined, IsString, IsNotEmpty, IsArray, IsBoolean, ValidateNested } from 'class-validator';
import { LangDto } from '../lang/lang.dto';
import { Type } from 'class-transformer';
import { TagDto } from './tag.dto';

// @dynamic
export class TagListDto extends BaseModel {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    displayName: LangDto[];

    @IsDefined()
    @IsArray()
    modelKeyApplication: string[];

    @IsDefined()
    @IsBoolean()
    applyToDocuments: boolean;

    @IsDefined()
    @IsBoolean()
    applyToImages: boolean;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => TagDto)
    tags: TagDto[];
}
