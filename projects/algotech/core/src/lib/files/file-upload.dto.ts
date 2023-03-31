import { IsOptional, IsString, IsNotEmpty, IsArray } from 'class-validator';
import { DocumentMetadatasDto } from '../documents';

// @dynamic
export class FileUploadDto {
    @IsOptional()
    @IsString()
    documentID?: string;

    @IsOptional()
    @IsString()
    versionID?: string;

    @IsOptional()
    @IsString()
    reason?: string;

    @IsNotEmpty()
    @IsString()
    userID: string;

    @IsOptional()
    @IsString()
    tags?: string;

    @IsOptional()
    forceIndexation?: string;

    @IsOptional()
    @IsString()
    metadatas?: string;
}
