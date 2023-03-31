import { IsDefined, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { SmartObjectTreeNavigation } from './smart-object.tree-navigation.dto';

// @dynamic
export class SmartObjectTreeQuery {

    @IsDefined()
    @IsArray()
    inputUuids: string[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => SmartObjectTreeNavigation)
    navigationStrategy: SmartObjectTreeNavigation[];

    @IsOptional()
    depth?: number;

}
