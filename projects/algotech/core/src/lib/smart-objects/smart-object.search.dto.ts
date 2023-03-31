import { IsDefined, IsOptional, IsString, IsNumber } from 'class-validator';

export class SmartObjectSearchDto {
    @IsOptional()
    @IsString()
    search?: string;

    @IsDefined()
    @IsNumber()
    skip: number;

    @IsDefined()
    @IsNumber()
    max: number;
}
