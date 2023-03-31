import { IsDefined, IsString, IsArray, ValidateNested, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { PositionDto } from '../shared';

// @dynamic
export class ZoneDto {

    @IsDefined()
    @IsString()
    appKey: string;

    @IsDefined()
    @IsString()
    magnetsZoneKey: string;

    @IsOptional()
    @IsString()
    boardInstance?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => PositionDto)
    position: PositionDto;

    @IsDefined()
    @IsNumber()
    order: number;

}
