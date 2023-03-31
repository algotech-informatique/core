import { SmartPropertyObjectDto } from './../smart-objects/smart-property-object.dto';
import { IsArray, IsDefined, IsUUID, IsOptional, ValidateNested, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { GeoDto } from '../atskills/atskills-geo.dto';

// @dynamic
export class GeoPOIDto {
    @IsDefined()
    @IsUUID()
    uuid: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => GeoDto)
    geo: GeoDto[];

    @IsString()
    @IsOptional()
    prop?: string;

    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Type(() => SmartPropertyObjectDto)
    properties?: SmartPropertyObjectDto[];

}
