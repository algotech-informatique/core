import { IsDefined, IsString, IsArray } from 'class-validator';

// @dynamic
export class GeometryDto {
    @IsDefined()
    @IsString()
    type: string;

    @IsDefined()
    @IsArray()
    coordinates: any[];
}
