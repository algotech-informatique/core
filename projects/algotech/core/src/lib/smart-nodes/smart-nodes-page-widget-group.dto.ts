import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsOptional, IsString, ValidateNested } from 'class-validator';
import { SnPageWidgetDto } from './smart-nodes-page-widget.dto';

// @dynamic
export class SnPageWidgetGroupDto {
    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageWidgetDto)
    widgets: SnPageWidgetDto[];
}
