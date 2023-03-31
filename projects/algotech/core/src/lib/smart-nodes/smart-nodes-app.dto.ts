import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDefined, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { DrawingDataDto } from '../drawing';
import { LangDto } from '../lang';
import { ThemeDto } from '../settings';
import { SnPageWidgetDto } from './smart-nodes-page-widget.dto';
import { SnPageDto } from './smart-nodes-page.dto';

// @dynamic
export class SnAppDto {
    @IsUUID()
    @IsDefined()
    id: string;

    @IsDefined()
    @IsString()
    environment: 'web' | 'mobile';

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageDto)
    pages: SnPageDto[];

    @IsString()
    @IsDefined()
    icon: string;

    @IsString()
    @IsOptional()
    description?: LangDto[];

    @IsNumber()
    @IsDefined()
    pageHeight: number;

    @IsNumber()
    @IsDefined()
    pageWidth: number;

    @IsArray()
    @IsDefined()
    securityGroups: string[];

    @IsOptional()
    @ValidateNested()
    @Type(() => DrawingDataDto)
    drawing?: DrawingDataDto;

    // only for front side
    displayState?: any;

    @IsOptional()
    custom?: any;

    @IsOptional()
    @ValidateNested()
    @Type(() => ThemeDto)    
    theme?: ThemeDto;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SnPageWidgetDto) 
    shared: SnPageWidgetDto[]
}
