import { IsString, IsDefined, IsBoolean, IsUUID } from 'class-validator';

// @dynamic
export class SnPageVariableDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    type: string;

    @IsBoolean()
    @IsDefined()
    multiple: boolean;
}
