import { IsString, IsNotEmpty, IsDefined } from 'class-validator';

// @dynamic
export class PlanPoiContentSettingsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    path: string;

    @IsDefined()
    @IsNotEmpty()
    value: any;

}
