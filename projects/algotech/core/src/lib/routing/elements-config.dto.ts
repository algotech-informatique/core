import { IsDefined, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { GraphInputDto } from './graph-input.dto';
import { Type } from 'class-transformer';

// @dynamic
export class ElementsConfigDto {
  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @Type(() => GraphInputDto)
  graphsArray: GraphInputDto[];
}
