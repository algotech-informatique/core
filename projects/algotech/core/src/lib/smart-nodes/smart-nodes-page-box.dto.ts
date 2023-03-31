import { IsNumber, IsDefined } from 'class-validator';

export class SnPageBoxDto {

    @IsDefined()
    @IsNumber()
    x: number;

    @IsDefined()
    @IsNumber()
    y: number;

    @IsDefined()
    @IsNumber()
    height: number;

    @IsDefined()
    @IsNumber()
    width: number;

}
