import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDefined, IsOptional, ValidateNested } from 'class-validator';
import { PairDto } from '../pair';

// @dynamic
export class WorkflowApiAuthDto {
    @IsBoolean()
    @IsDefined()
    jwt: boolean;

    @IsOptional()
    @ValidateNested()
    @Type(() => PairDto)
    webhook?: PairDto;

    @IsArray()
    @IsOptional()
    groups?: string[];
}
