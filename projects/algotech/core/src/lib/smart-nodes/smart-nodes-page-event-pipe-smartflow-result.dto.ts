import { IsDefined, IsString, IsBoolean } from 'class-validator';

// @dynamic
export class SnPageEventPipeSmartflowResultDto {

    @IsString()
    @IsDefined()
    type: string;

    @IsBoolean()
    @IsDefined()
    multiple: boolean;
}
