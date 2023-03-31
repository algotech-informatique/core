import { SnElementDto } from './smart-nodes-element.dto';
import { IsString, IsOptional, IsDefined, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { SnFlowDto } from './smart-nodes-flow.dto';
import { SnParamDto } from './smart-nodes-param.dto';
import { SnSectionDto } from './smart-nodes-section.dto';

// @dynamic
export class SnNodeDto extends SnElementDto {

    @IsString()
    @IsOptional()
    key?: string;

    @IsString()
    @IsOptional()
    parentId?: string;

    @IsString()
    @IsOptional()
    icon?: string;

    @IsString()
    @IsOptional()
    type?: string;

    @IsBoolean()
    @IsOptional()
    flowsEditable?: boolean;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnFlowDto)
    flows: SnFlowDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnParamDto)
    params: SnParamDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnSectionDto)
    sections: SnSectionDto[];

    @IsBoolean()
    @IsOptional()
    expanded?: boolean;

}
