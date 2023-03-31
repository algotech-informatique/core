import { Type } from 'class-transformer';
import { IsDefined,  IsOptional, ValidateNested, IsArray, IsUUID } from 'class-validator';
import { SnGroupDto } from './smart-nodes-group.dto';
import { SnBoxDto } from './smart-nodes-box.dto';
import { SnNodeDto } from './smart-nodes-node.dto';
import { SnCommentDto } from './smart-nodes-comment.dto';
import { DrawingDataDto } from '../drawing';

// @dynamic
export class SnViewDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnGroupDto)
    groups: SnGroupDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnBoxDto)
    box: SnBoxDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnNodeDto)
    nodes: SnNodeDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnCommentDto)
    comments: SnCommentDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => DrawingDataDto)
    drawing: DrawingDataDto;

    @IsOptional()
    options?: any;

}
