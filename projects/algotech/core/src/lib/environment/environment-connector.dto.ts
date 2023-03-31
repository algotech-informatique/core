import { IsString, IsDefined, IsArray, IsUUID, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { EnvironmentParameterDto } from './environment-parameter.dto';

// @dynamic
export class EnvironmentConnectorDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    name: string;
    
    @IsArray()
    @IsOptional()
    @ValidateNested()
    @Type(() => EnvironmentParameterDto)
    parameters?: EnvironmentParameterDto[];
}
