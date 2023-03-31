import { IsString, IsNotEmpty, IsDefined, IsArray, ValidateNested } from 'class-validator';
import { EleJsonPoint2DDto } from './elejson-models/elejson-point2D.dto';
import { SymboleBaseDto } from './symbole.base.dto';
import { Type } from 'class-transformer';

// @dynamic
export class SymboleDto extends SymboleBaseDto {

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SymboleBaseDto)
    symboles: SymboleBaseDto[];

    @IsDefined()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => EleJsonPoint2DDto)
    anchor: EleJsonPoint2DDto;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    drawing: string; // svg
}
