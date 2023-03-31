import { SnPageEventDto } from './smart-nodes-page-event.dto';
import { SnPageWidgetDto } from './smart-nodes-page-widget.dto';
import { Type } from 'class-transformer';
import { IsDefined, IsString, IsArray, ValidateNested, IsOptional, IsUUID, IsBoolean, IsNumber } from 'class-validator';
import { SnPageVariableDto } from './smart-nodes-page-variable.dto';
import { SnCanvasDto } from './smart-nodes-canvas.dto';
import { LangDto } from '../lang';
import { SnPageEventPipeDto } from './smart-nodes-page-event-pipe.dto';

// @dynamic
export class SnPageDto {
    @IsUUID()
    @IsDefined()
    id: string;

    @IsDefined()
    css: any;

    @IsString()
    @IsOptional()
    icon?: string;

    @IsArray()
    @IsDefined()
    displayName: LangDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => SnCanvasDto)
    canvas: SnCanvasDto;

    @IsArray()
    @IsOptional()
    securityGroups?: string[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageWidgetDto)
    widgets: SnPageWidgetDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => SnPageWidgetDto)
    header?: SnPageWidgetDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => SnPageWidgetDto)
    footer?: SnPageWidgetDto;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageVariableDto)
    variables: SnPageVariableDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageEventPipeDto)
    dataSources: SnPageEventPipeDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageEventDto)
    events: SnPageEventDto[];

    @IsBoolean()
    @IsOptional()
    main?: boolean;

    // only for front side
    displayState?: any;

    @IsOptional()
    custom?: any;

    @IsNumber()
    @IsDefined()
    pageHeight: number;

    @IsNumber()
    @IsDefined()
    pageWidth: number;
}
