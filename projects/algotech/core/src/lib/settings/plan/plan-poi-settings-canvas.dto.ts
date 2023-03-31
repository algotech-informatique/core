import { IsNumber, IsOptional } from 'class-validator';

// @dynamic
export class PlanPoiSettingsCanvasDto {

    @IsNumber()
    @IsOptional()
    originWidth: number;

    @IsNumber()
    @IsOptional()
    originHeight: number;

    @IsNumber()
    @IsOptional()
    width: number;

    @IsNumber()
    @IsOptional()
    height: number;
}
