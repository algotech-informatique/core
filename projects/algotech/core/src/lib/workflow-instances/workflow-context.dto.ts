import { IsString, IsDefined, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from '../users';
import { SmartModelDto } from '../smart-models';
import { GenericListDto } from '../glists';
import { GroupDto } from '../groups';
import { SettingsDto } from '../settings';
import { ApplicationModelDto } from '../application-models';
import { PairDto } from '../pair';

// @dynamic
export class WorkflowInstanceContextDto {
    @IsString()
    @IsOptional()
    customerKey?: string;

    @IsString()
    @IsOptional()
    jwt?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => ApplicationModelDto)
    apps: ApplicationModelDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SmartModelDto)
    smartmodels: SmartModelDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => GenericListDto)
    glists: GenericListDto[];

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => GroupDto)
    groups: GroupDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => SettingsDto)
    settings: SettingsDto;

    @IsString()
    @IsOptional()
    type?: string;

    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => PairDto)
    metrics?: PairDto[];

    @IsOptional()
    custom?: any;
}
