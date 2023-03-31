import { Expose, Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { PairDto } from '../../pair';

// @dynamic
export class ThemeDto {
    @IsString()
    @Expose()
    themeKey: string; // light, dark, custom

    @IsArray()
    @Expose()
    @ValidateNested()
    @Type(() => PairDto)
    customColors: PairDto[];
}
