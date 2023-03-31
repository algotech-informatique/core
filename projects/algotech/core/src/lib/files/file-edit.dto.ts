import { IsString, IsDefined, IsUUID, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DocumentLockStateDto, AnnotationDto, DocumentMetadatasDto } from '../documents';

// @dynamic
export class FileEditDto {
    @IsDefined()
    @IsUUID()
    uuid: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    tags?: string[];

    @IsOptional()
    @ValidateNested()
    @Type(() => DocumentLockStateDto)
    lockState?: DocumentLockStateDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    annotations?: AnnotationDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => DocumentMetadatasDto)
    metadatas?: DocumentMetadatasDto[];
}
