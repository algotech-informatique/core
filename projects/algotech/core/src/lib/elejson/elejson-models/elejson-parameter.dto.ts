import { IsDefined, IsString, IsNotEmpty, IsBoolean, IsNumber, ValidateNested } from 'class-validator';
import { EleJsonPoint2DDto } from './elejson-point2D.dto';
import { Type } from 'class-transformer';

// @dynamic
export class EleJsonParameterDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    templateHTML: string; // html

    @IsDefined()
    value: any;

    @IsDefined()
    defaultValue: any;

    @IsDefined()
    @IsNotEmpty()
    @IsBoolean()
    hidden: boolean;

    @IsDefined()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => EleJsonPoint2DDto)
    position: EleJsonPoint2DDto;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    angle: number;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    transform: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    type: 'incremental' | 'array' | 'implicit';
}
