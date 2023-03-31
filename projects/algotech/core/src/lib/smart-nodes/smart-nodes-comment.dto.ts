import { IsString, IsOptional, IsDefined, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { SnCanvasDto } from './smart-nodes-canvas.dto';
import { LangDto } from '../lang';

// @dynamic
export class SnCommentDto {

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    parentId?: string;

    @IsDefined()
    @IsBoolean()
    open: boolean;

    @IsDefined()
    comment?: LangDto[] | string;

    @IsDefined()
    @ValidateNested()
    @Type(() => SnCanvasDto)
    canvas: SnCanvasDto;

}
