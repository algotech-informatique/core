import { IsString, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

export class LangDto {
    @Expose()
    @IsString()
    @IsDefined()
    lang: string;

    @IsString()
    @Expose()
    @IsDefined()
    value: string;
}
