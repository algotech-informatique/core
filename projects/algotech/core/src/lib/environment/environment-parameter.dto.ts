import { IsBoolean, IsDefined, IsOptional, IsString } from "class-validator";

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

    @IsBoolean()
    @IsOptional()
    password?: boolean;
}
