import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AnnotationZoneDto {
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    positionX: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    positionY: number;

    @IsOptional()
    @IsNumber()
    rayon?: number;

    @IsOptional()
    @IsString()
    color?: string;
}
