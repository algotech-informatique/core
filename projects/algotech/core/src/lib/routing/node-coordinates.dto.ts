import {  IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class NodeCoordinatesDto {

    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    x: number;

    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    y: number;

    @IsNotEmpty()
    @IsDefined()
    @IsNumber()
    z: number;
}
