import { Expose } from 'class-transformer';
import { IsArray, IsDefined, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { DrawingPenList } from './drawing-pen-list.type';

// @dynamic
export class DrawingLineDto {
    @Expose()
    @IsUUID()
    @IsOptional()
    id: string;

    @IsArray()
    @IsNumber()
    points: number[][];

    @IsString()
    @IsDefined()
    color: string;

    @IsString()
    @IsDefined()
    penType: DrawingPenList;

    @IsNumber()
    @IsDefined()
    penScale: number;
}
