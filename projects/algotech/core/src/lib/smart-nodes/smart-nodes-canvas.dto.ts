import { IsNumber, IsDefined } from 'class-validator';

export class SnCanvasDto {

    @IsNumber()
    @IsDefined()
    x: number;

    @IsNumber()
    @IsDefined()
    y: number;

}
