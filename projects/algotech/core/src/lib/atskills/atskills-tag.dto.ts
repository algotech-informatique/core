import { IsArray } from 'class-validator';

// @dynamic
export class ATTagDto {

    @IsArray()
    tags: string[];

}
