import { IsString, IsDefined, IsArray, IsUUID, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

// @dynamic
export class EnvironmentDirectoryDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    name: string;

    @IsOptional()
    custom?: any;

    @IsArray()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    subDirectories: EnvironmentDirectoryDto[];
}
