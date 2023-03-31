import { IsBoolean, IsDefined, IsString } from 'class-validator';

// @dynamic
export class SnPageWidgetTypeReturnDto {

    @IsDefined()
    @IsString()
    key: string;

    @IsDefined()
    @IsBoolean()
    multiple: boolean;

    @IsDefined()
    @IsString()
    type: string;

    @IsDefined()
    @IsString()
    name: string;
}
