import { IsString, IsNotEmpty, IsDefined, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { BaseModel } from '../base';
import { SmartPropertyObjectDto } from '../smart-objects';
import { Type } from 'class-transformer';
import { DocumentLockStateDto } from './document-lock.dto';
import { VersionDto } from './version.dto';
import { DocumentMetadatasDto } from './document-metadatas.dto';
import { IndexStatus } from '../idexation/indexation-status.type.dto';

// @dynamic
export class DocumentDto extends BaseModel {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    ext: string;

    @IsOptional()
    documentModelKey?: string;

    @IsOptional()
    tags: string[];

    @IsOptional()
    @ValidateNested()
    @Type(() => DocumentLockStateDto)
    lockState?: DocumentLockStateDto;

    @IsArray()
    extendedProperties: SmartPropertyObjectDto[];

    @IsOptional()
    @IsString()
    indexStatus?: IndexStatus;

    @IsOptional()
    @Type(() => Date)
    lastIndexDate?: Date

    @IsOptional()
    @ValidateNested()
    @Type(() => VersionDto)
    versions: VersionDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => DocumentMetadatasDto)
    metadatas: DocumentMetadatasDto[];
}
