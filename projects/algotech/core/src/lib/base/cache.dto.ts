import { IsArray } from 'class-validator';

// @dynamic
export class CacheDto {
    @IsArray()
    updated: any[];

    @IsArray()
    deleted: any[];
}
