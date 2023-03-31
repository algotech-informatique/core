import { IsString, IsDefined, IsNotEmpty, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { LangDto } from '../lang';

// @dynamic
export class GenericListValueDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    key: string;
    
    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    @IsDefined()
    value: LangDto[];

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    index: number;
}
