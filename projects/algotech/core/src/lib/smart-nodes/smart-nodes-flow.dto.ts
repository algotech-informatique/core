import { IsBoolean, IsOptional, IsArray, IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SnConnectorDto } from './smart-nodes-connector.dto';
import { SnParamDto } from './smart-nodes-param.dto';

// @dynamic
export class SnFlowDto extends SnConnectorDto {

    @IsBoolean()
    @IsOptional()
    paramsEditable?: boolean;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnParamDto)
    params: SnParamDto[];
}
