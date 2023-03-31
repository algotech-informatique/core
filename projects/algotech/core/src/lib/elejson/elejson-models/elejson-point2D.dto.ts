import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class EleJsonPoint2DDto {
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    x: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    y: number;
}
