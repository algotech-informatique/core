import { IsBoolean, IsDefined, IsString } from 'class-validator';

export class EleJsonMetadataDto {
    @IsDefined()
    @IsString()
    family: string;

    @IsDefined()
    @IsString()
    supervisedby: string;

    @IsDefined()
    @IsString()
    controledby: string;

    @IsDefined()
    @IsBoolean()
    hidden: boolean;

    @IsDefined()
    @IsString()
    notes: string;
}
