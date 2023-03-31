import { IsString, IsNotEmpty, IsDefined, IsNumber } from 'class-validator';

export class EleJsonPropertiesDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    format: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    width: number;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    height: number;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    orientation: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    unit: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    scale: number;
}
