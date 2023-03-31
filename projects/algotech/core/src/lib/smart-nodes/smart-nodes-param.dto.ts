import { SnConnectorDto } from './smart-nodes-connector.dto';
import { IsUUID, IsDefined, IsString, IsBoolean, IsOptional } from 'class-validator';

export class SnParamDto extends SnConnectorDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsDefined()
    types: string | string[];

    @IsString()
    @IsOptional()
    display?: 'input' | 'select' | 'multi-select';

    @IsOptional()
    @IsBoolean()
    multiple?: boolean;

    @IsDefined()
    @IsBoolean()
    pluggable: boolean;

    @IsOptional()
    @IsBoolean()
    master?: boolean;

    @IsOptional()
    @IsBoolean()
    required?: boolean;

    @IsOptional()
    @IsBoolean()
    hidden?: boolean;

    @IsOptional()
    default?: any;

    @IsOptional()
    value?: any;
}
