import { IsDefined, IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PairDto } from '../pair';
// @dynamic
export class WorkflowTaskActionDto {
    @IsString()
    @IsDefined()
    actionKey: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => PairDto)
    asset?: PairDto;

    @IsDefined()
    value: any;
}
