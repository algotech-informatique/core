import { IsDefined, IsString, IsArray, IsOptional } from 'class-validator';

export class SmartObjectGeoBoxDto {
    @IsDefined()
    @IsArray()
    box: number[][];

    @IsDefined()
    @IsString()
    layerKey: string;

    @IsDefined()
    @IsString()
    modelKey: string;

    @IsOptional()
    @IsString()
    propKeyFilter: string;

    @IsOptional()
    propValueFilter: any;

    @IsOptional()
    @IsString()
    propKey?: string;
}
