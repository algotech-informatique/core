import { Expose } from 'class-transformer';
import { IsString, IsDefined, IsOptional } from 'class-validator';

// @dynamic
export class PairDto {
    @IsString()
    @IsDefined()
    @Expose()
    key: string;

    @IsOptional()
    @Expose()
    value?: any;
}
