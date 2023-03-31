import { SnPageBoxDto } from './smart-nodes-page-box.dto';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDefined, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { SnPageEventDto } from './smart-nodes-page-event.dto';
import { SnPageWidgetGroupDto } from './smart-nodes-page-widget-group.dto';
import { SnPageWidgetRuleDto } from './smart-nodes-page-widget-rule.dto';
import { SnPageWidgetTypeReturnDto } from './smart-nodes-page-widget-type-return.dto';

// @dynamic
export class SnPageWidgetDto {
    @IsUUID()
    @IsDefined()
    id: string; 

    @IsDefined()
    @IsString()
    typeKey: string;

    @IsDefined()
    name: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageBoxDto)
    box: SnPageBoxDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => SnPageWidgetGroupDto)
    group?: SnPageWidgetGroupDto;

    @IsDefined()
    @IsBoolean()
    isActive: boolean;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageEventDto)
    events: SnPageEventDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageWidgetRuleDto)
    rules: SnPageWidgetRuleDto[];

    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Type(() => SnPageWidgetTypeReturnDto)
    returnData?:  SnPageWidgetTypeReturnDto[];

    @IsDefined()
    css: any;

    @IsDefined()
    custom: any;

    // only for front side
    displayState?: any;

    @IsUUID()
    @IsOptional()
    sharedId?: string

    @IsBoolean()
    @IsOptional()
    locked?: boolean;

    @IsArray()
    @IsOptional()
    lockedProperties?: string[];

    @IsOptional()
    afterTemplatePlaced?: any;
}
