import { IsDefined, IsNotEmpty, IsArray, ValidateNested, IsString } from 'class-validator';
import { EleJsonPoint2DDto } from './elejson-point2D.dto';
import { SymboleBaseDto } from '../symbole.base.dto';
import { Type } from 'class-transformer';
import { EleJsonWireFromToDto } from './elejson-wire-fromto.dto';

// @dynamic
export class EleJsonWireDto extends SymboleBaseDto {

    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    @Type(() => EleJsonPoint2DDto)
    points: EleJsonPoint2DDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => EleJsonWireFromToDto)
    fromTo: EleJsonWireFromToDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    section: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    type: string;
}
