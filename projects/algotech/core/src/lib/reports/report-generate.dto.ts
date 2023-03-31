import { IsDefined, IsString, IsOptional, IsBoolean, ValidateNested } from 'class-validator';
import { FileUploadDto } from '../files';
import { Type } from 'class-transformer';

// @dynamic
export class ReportGenerateDto {
    @IsDefined()
    @IsString()
    reportKey: string;

    @IsDefined()
    @IsString()
    soUuid: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => FileUploadDto)
    details: FileUploadDto;

    @IsOptional()
    @IsString()
    fileName?: string;

    @IsOptional()
    @IsBoolean()
    preview?: boolean;

    @IsOptional()
    @IsBoolean()
    download?: boolean;

    @IsOptional()
    data?: any;
}
