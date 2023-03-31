import { Type } from 'class-transformer';
import { IsArray, IsDefined, ValidateNested } from 'class-validator';
import { ZoneDto } from './atskills-zone.dto';

// @dynamic
export class ATMagnetDto {
    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => ZoneDto)
    zones: ZoneDto[];
}
