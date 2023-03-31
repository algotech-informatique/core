import { IsBoolean, IsDefined, IsString, IsUUID } from 'class-validator';
import { PairDto } from '../pair';

// @dynamic
export class ImportSoDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    replaceExisting: string;

    @IsString()
    @IsDefined()
    modelKey: string;

    @IsString()
    @IsDefined()
    options: string;
}