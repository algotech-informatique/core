import { IsUUID, IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// @dynamic
export class BaseModel {
    @Expose()
    @IsUUID()
    @IsOptional()
    uuid?: string;

    @Type(() => Date)
    @IsOptional()
    createdDate?: string;

    @Type(() => Date)
    @IsOptional()
    updateDate?: string;
}
