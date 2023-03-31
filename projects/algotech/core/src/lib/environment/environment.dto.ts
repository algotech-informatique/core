import { IsDefined, IsArray, ValidateNested } from 'class-validator';
import { EnvironmentDirectoryDto } from './environment.directory.dto';
import { Type } from 'class-transformer';
import { BaseModel } from '../base';

// @dynamic
export class EnvironmentDto extends BaseModel {
    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    workflows: EnvironmentDirectoryDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    smartmodels: EnvironmentDirectoryDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    smartflows: EnvironmentDirectoryDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    reports: EnvironmentDirectoryDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    apps: EnvironmentDirectoryDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => EnvironmentDirectoryDto)
    smartTasks: EnvironmentDirectoryDto[];
}
