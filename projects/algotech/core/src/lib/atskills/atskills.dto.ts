import { IsOptional, ValidateNested, IsArray } from 'class-validator';
import { ATGeolocationDto } from './atskills-geolocation.dto';
import { Type } from 'class-transformer';
import { ATSignatureDto } from './atskills-signature.dto';
import { ATDocumentDto } from './atskills-document.dto';
import { ATTagDto } from './atskills-tag.dto';
import { ATMagnetDto } from './atskills-magnet.dto';

// @dynamic
export class ATSkillsDto {

    @IsOptional()
    @ValidateNested()
    @Type(() => ATGeolocationDto)
    atGeolocation?: ATGeolocationDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ATDocumentDto)
    atDocument?: ATDocumentDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ATSignatureDto)
    atSignature?: ATSignatureDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ATTagDto)
    atTag?: ATTagDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => ATMagnetDto)
    atMagnet?: ATMagnetDto;
}
