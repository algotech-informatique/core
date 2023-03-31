import { IsDefined, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { GraphOutputDto } from './graph-output.dto';
import { Type } from 'class-transformer';

// @dynamic
export class ElementsGraphDto {
  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @Type(() => GraphOutputDto)
  routes: GraphOutputDto[];
}
