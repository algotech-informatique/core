import { IsDefined, IsString, IsArray, IsNotEmpty, IsBoolean } from 'class-validator';

// @dynamic
export class ScheduleTypeDisplay {

    @IsDefined()
    @IsString()
    smartModelsKey: string;

    @IsDefined()
    @IsNotEmpty()
    @IsBoolean()
    hasTitle: boolean;

    @IsDefined()
    @IsArray()
    securityGroupsKey: string[];

    @IsDefined()
    @IsString()
    primary: string;    // path

    @IsDefined()
    @IsString()
    secondary: string;  // path

    @IsDefined()
    @IsString()
    tertiary: string;   // path

    @IsDefined()
    @IsString()
    highlight: string;  // path
}
