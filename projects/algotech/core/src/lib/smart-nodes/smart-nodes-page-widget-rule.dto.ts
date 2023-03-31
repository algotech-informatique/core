import { IsDefined, IsString, IsArray, ValidateNested, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { SnPageWidgetConditionDto } from './smart-nodes-page-widget-condition.dto';
import { SnPageEventDto } from './smart-nodes-page-event.dto';

// @dynamic
export class SnPageWidgetRuleDto {
    @IsUUID()
    @IsDefined()
    id: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageWidgetConditionDto)
    conditions: SnPageWidgetConditionDto[];

    @IsDefined()
    @IsString()
    operator: 'and' | 'or';

    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    color: string;

    @IsDefined()
    css: any; // difference

    @IsDefined()
    custom: any; // difference

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageEventDto)
    events: SnPageEventDto[]; // difference
}
