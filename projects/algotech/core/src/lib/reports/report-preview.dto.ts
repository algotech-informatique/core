import { IsDefined, IsString, IsOptional, IsBoolean } from 'class-validator';

// @dynamic
export class ReportPreviewDto {
    @IsDefined()
    @IsString()
    reportKey: string;

    @IsOptional()
    @IsString()
    fileName?: string;

    @IsOptional()
    @IsBoolean()
    download?: boolean;

    @IsOptional()
    data?: any;
}
