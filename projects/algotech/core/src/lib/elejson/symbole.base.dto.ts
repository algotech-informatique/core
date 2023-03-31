import { IsString, IsNotEmpty, IsDefined, IsArray, Validate, ValidateNested } from 'class-validator';
import { LangDto } from '../lang';
import { EleJsonPoint2DDto } from './elejson-models/elejson-point2D.dto';
import { EleJsonParameterDto } from './elejson-models/elejson-parameter.dto';
import { DateStringFormat } from './dateValidationConstraint';
import { Type } from 'class-transformer';
import { BaseModel } from '../base';

// @dynamic
export class SymboleBaseDto extends BaseModel {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    displayName: LangDto[];

    @IsDefined()
    @IsNotEmpty()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    date: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    defaultDrawingBehavior: 'none' | 'break' | 'asked';

    @ValidateNested()
    @IsDefined()
    @Type(() => EleJsonPoint2DDto)
    defaultPosition?: EleJsonPoint2DDto;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    transform: string;

    @ValidateNested()
    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    @Type(() => EleJsonPoint2DDto)
    connections: EleJsonPoint2DDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    nomenclature: string;

    @ValidateNested()
    @IsDefined()
    @IsArray()
    @Type(() => EleJsonParameterDto)
    parameters: EleJsonParameterDto[];
}
