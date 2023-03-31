import { IsDefined, IsArray, ValidateNested } from 'class-validator';
import { EleJsonNormeDto } from './elejson-models/elejson-norme.dto';
import { SymboleBaseDto } from './symbole.base.dto';
import { Type } from 'class-transformer';

// @dynamic
export class LibraryDto extends EleJsonNormeDto {
    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SymboleBaseDto)
    symboles: SymboleBaseDto[];
}
