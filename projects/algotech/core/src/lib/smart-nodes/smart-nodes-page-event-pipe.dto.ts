
import { Type } from 'class-transformer';
import { IsDefined, IsString, IsOptional, IsUUID, IsArray, ValidateNested } from 'class-validator';
import { PairDto } from '../pair';

// @dynamic
export class SnPageEventPipeDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsOptional()
    @IsString()
    key?: string;

    @IsString()
    @IsDefined()
    type: string;

    @IsOptional()
    action?: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => PairDto)
    inputs: PairDto[];

    @IsOptional()
    custom?: any;
}
