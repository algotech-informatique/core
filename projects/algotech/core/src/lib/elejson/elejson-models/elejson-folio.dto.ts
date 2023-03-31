import { Validate,IsUUID, IsString, IsNotEmpty, IsDefined, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { EleJsonPropertiesDto } from './elejson-folio-properties.dto';
import { EleJsonMetadataDto } from './elejson-folio-metadata.dto';
import { EleJsonBlocDto } from './elejson-folio-bloc.dto';
import { Type } from 'class-transformer';
import { DateStringFormat } from '../dateValidationConstraint';

// @dynamic
export class EleJsonFolioDto {
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    state: 'active' | 'deleted';

    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    @IsNotEmpty()
    @IsDefined()
    creationDate: string;

    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    @IsNotEmpty()
    @IsDefined()
    modifDate: string;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    order: number;

    @IsArray()
    @IsDefined()
    domains: string[];

    @IsArray()
    @IsDefined()
    notes: string[];

    @IsArray()
    @IsDefined()
    titres: string[];

    @IsArray()
    @IsDefined()
    indices: string[];

    @IsArray()
    @IsDefined()
    variantes: string[];

    @IsArray()
    @IsDefined()
    ecarts: string[];

    @IsNotEmpty()
    @IsDefined()
    @ValidateNested()
    @Type(() => EleJsonPropertiesDto)
    properties: EleJsonPropertiesDto;

    @IsNotEmpty()
    @IsDefined()
    @ValidateNested()
    @Type(() => EleJsonMetadataDto)
    metadata: EleJsonMetadataDto;

    @IsNotEmpty()
    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => EleJsonBlocDto)
    blocs: EleJsonBlocDto[];
}
