import { IsDefined, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GeoDto } from './atskills-geo.dto';

// @dynamic
export class ATGeolocationDto {

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => GeoDto)
    geo: GeoDto[];
}
