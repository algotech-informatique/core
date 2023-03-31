import { Type } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';

// @dynamic
export class ImportSoResultDto {
    @IsDefined()
    @IsNumber()
    nbUpdated: number;

    @IsDefined()
    @IsNumber()
    nbInserted: number;

    @IsDefined()
    @IsNumber()
    nbIgnored: number;
}