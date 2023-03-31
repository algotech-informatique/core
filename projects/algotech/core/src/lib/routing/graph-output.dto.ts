import { IsDefined, IsNotEmpty, IsArray, IsString, ValidateNested } from 'class-validator';
import { NodeCoordinatesDto } from './node-coordinates.dto';
import { SegmentDto } from './segment.dto';
import { Type } from 'class-transformer';

// @dynamic
export class GraphOutputDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @Type(() => NodeCoordinatesDto)
  nodes: NodeCoordinatesDto[];

  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @Type(() => SegmentDto)
  segments: SegmentDto[];
}
