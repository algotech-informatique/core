import { IsString, IsNotEmpty, IsDefined, IsArray, ValidateNested } from 'class-validator';
import { EleJsonFolioDto } from './elejson-models/elejson-folio.dto';
import { EleJsonNormeDto } from './elejson-models/elejson-norme.dto';
import { SymboleDto } from './symbole.dto';
import { BaseModel } from '../base';
import { Type } from 'class-transformer';

// @dynamic
export class EleJsonDto extends BaseModel {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    language: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    type: string;

    @IsDefined()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => EleJsonNormeDto)
    norme: EleJsonNormeDto;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EleJsonFolioDto)
    folios: EleJsonFolioDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SymboleDto)
    cache: SymboleDto[];
}
