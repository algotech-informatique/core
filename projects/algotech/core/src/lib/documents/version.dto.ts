import { IsString, IsNotEmpty, IsArray, IsOptional, ValidateNested, IsNumber } from 'class-validator';
import { BaseModel } from '../base';
import { SmartPropertyObjectDto } from '../smart-objects';
import { Type } from 'class-transformer';
import { AnnotationDto } from './annotation.dto';

// @dynamic
export class VersionDto extends BaseModel {
    @IsNotEmpty()
    @IsString()
    fileID: string;

    @IsOptional()
    @IsArray()
    linkedFilesID: string[];

    @IsOptional()
    @IsNumber()
    size: number;

    @IsOptional()
    @IsString()
    dateUpdated: string;

    @IsOptional()
    @IsString()
    reason: string;

    @IsNotEmpty()
    @IsString()
    userID: string;

    @IsArray()
    extendedProperties: SmartPropertyObjectDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    annotations: AnnotationDto[];

}
