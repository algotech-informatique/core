import { IsDefined, IsString, IsArray, ValidateNested } from 'class-validator';
import { EleJsonWireDto } from './elejson-wire.dto';
import { EleJsonMaskDto } from './elejson-mask.dto';
import { SymboleBaseDto } from '../symbole.base.dto';
import { Type } from 'class-transformer';

// @dynamic
export class EleJsonBlocDto {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => EleJsonWireDto)
    wires: EleJsonWireDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => EleJsonMaskDto)
    masks: EleJsonMaskDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SymboleBaseDto)
    links: SymboleBaseDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SymboleBaseDto)
    cells: SymboleBaseDto[];
}
