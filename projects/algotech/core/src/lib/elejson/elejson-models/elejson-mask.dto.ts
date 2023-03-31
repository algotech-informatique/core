import { IsDefined, IsNotEmpty, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { EleJsonPoint2DDto } from './elejson-point2D.dto';
import { SymboleBaseDto } from '../symbole.base.dto';
import { Type } from 'class-transformer';

// @dynamic
export class EleJsonMaskDto extends SymboleBaseDto {
    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    @Type(() => EleJsonPoint2DDto)
    points: EleJsonPoint2DDto[];

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    w: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    h: number;
}
