import { Type } from 'class-transformer';
import { IsArray, IsDefined, ValidateNested } from 'class-validator';
import { DrawingLineDto } from './drawing-line.dto';

// @dynamic
export class DrawingDataDto {
    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => DrawingLineDto)
    lines: DrawingLineDto[];

    @IsDefined()
    @IsArray()
    elements: any[]; // text, forms, ...
}
