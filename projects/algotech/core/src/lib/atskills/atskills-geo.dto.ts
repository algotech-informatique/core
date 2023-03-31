import { IsDefined, IsString, IsArray, ValidateNested } from 'class-validator';
import { GeometryDto } from './atskills-geometry.dto';
import { Type } from 'class-transformer';

// @dynamic
export class GeoDto {
    @IsDefined()
    @IsString()
    uuid?: string;

    @IsDefined()
    @IsString()
    layerKey: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => GeometryDto)
    geometries: GeometryDto[];

}
