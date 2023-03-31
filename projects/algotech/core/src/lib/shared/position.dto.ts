import { IsDefined, IsNumber } from 'class-validator';
export class PositionDto {
    @IsNumber()
    @IsDefined()
    x: number;

    @IsNumber()
    @IsDefined()
    y: number;
}
