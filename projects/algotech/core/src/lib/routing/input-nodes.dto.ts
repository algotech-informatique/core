import { IsDefined, IsNotEmpty, IsArray, IsIn, ValidateNested } from 'class-validator';
import { NodeDto } from './node.dto';
import { Type } from 'class-transformer';

// @dynamic
export class InputNodesDto {

    @IsDefined()
    @IsNotEmpty()
    @IsIn(['circuit', 'topo', 'route'])
    type: string;

    @IsDefined()
    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    @Type(() => NodeDto)
    elements: NodeDto[];
}
