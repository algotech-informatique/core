import { IsDefined, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { SymboleBaseDto } from '../symbole.base.dto';
import { Type } from 'class-transformer';

// @dynamic
export class EleJsonWireFromToDto {

    @IsDefined()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => SymboleBaseDto)
    from: SymboleBaseDto;

    @IsDefined()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => SymboleBaseDto)
    to: SymboleBaseDto;

    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    forcage: string[];
}
