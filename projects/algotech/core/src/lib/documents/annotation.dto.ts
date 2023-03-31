import { IsDefined, IsNotEmpty, IsString, IsOptional, ValidateNested, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { AnnotationZoneDto } from './annotation-position.dto';

// @dynamic
export class AnnotationDto {
    @IsDefined()
    @IsUUID()
    uuid: string;

    @IsNotEmpty()
    @IsString()
    annotation: string;

    @IsNotEmpty()
    @IsString()
    userID: string;

    @IsOptional()
    @IsString()
    author?: string;

    @IsOptional()
    @Type(() => Date)
    dateCreation: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => AnnotationZoneDto)
    zone: AnnotationZoneDto;
}
