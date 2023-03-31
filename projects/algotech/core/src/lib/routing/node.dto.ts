import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { NodeCoordinatesDto } from './node-coordinates.dto';
import { SegmentDto } from './segment.dto';

export class NodeDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsDefined()
  @IsNotEmpty()
  metadata: {
    element: string;
    name: string;
    description: string;
    type: 'Tableau' | 'Junction' | 'Route' | 'Terminal' | 'Wall';
  };

  @IsDefined()
  @IsNotEmpty()
  properties: {
    localization: Array<string>;
    graphic: string;
    segments: SegmentDto[];
    nodes: NodeCoordinatesDto[];
    type: Array<string>;
    nbrPhase: number;
    voltage: number;
    priority: number;
  };
}
