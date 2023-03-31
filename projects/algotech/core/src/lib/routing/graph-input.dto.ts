
import { IsDefined , IsNotEmpty , IsArray, ValidateNested} from 'class-validator';
import { InputNodesDto } from './input-nodes.dto';
import { Type } from 'class-transformer';

type paramsStrDto = 'typeSys'
| 'nbrphase'
| 'voltage'
| 'charge'
| 'localization'
| 'closer'
| 'byjunction'
| 'bycablepath'
| 'terminalpriority'
| 'istowire';

// @dynamic
export class GraphInputDto {
  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  parameters: paramsStrDto[];

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InputNodesDto)
  graph: InputNodesDto;
}
