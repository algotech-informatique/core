import { IsDefined, IsString } from 'class-validator';

export class GeoSettingsDto {

    @IsDefined()
    @IsString()
    modelKey: string;

    @IsDefined()
    @IsString()
    propKeyFilter: string;

    @IsDefined()
    propValueFilter: any;

}