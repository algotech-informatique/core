import { IsBoolean, IsDefined, IsString } from "class-validator";

// @dynamic
export class EnvironmentParameterDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    value: string;

    @IsBoolean()
    @IsDefined()
    active: boolean;
}
