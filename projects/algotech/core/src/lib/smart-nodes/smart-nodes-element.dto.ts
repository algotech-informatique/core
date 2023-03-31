import { Type } from 'class-transformer';
import { IsUUID, IsDefined, IsBoolean, ValidateNested, IsOptional } from 'class-validator';
import { SnCanvasDto } from './smart-nodes-canvas.dto';
import { LangDto } from '../lang';

// @dynamic
export class SnElementDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsOptional()
    displayName?: LangDto[] | string;

    @IsBoolean()
    @IsDefined()
    open: boolean;

    @ValidateNested()
    @IsDefined()
    @Type(() => SnCanvasDto)
    canvas: SnCanvasDto;

    @IsOptional()
    custom?: any;
}
