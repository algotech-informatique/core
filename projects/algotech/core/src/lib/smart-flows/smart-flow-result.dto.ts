import { IsArray, IsDefined, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SmartObjectDto } from '../smart-objects';

// @dynamic
export class SmartFlowResultDto {
    @IsDefined()
    data: any;

    @IsDefined()
    @IsString()
    type: string;

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => SmartObjectDto)
    smartobjects?: SmartObjectDto[];
}
