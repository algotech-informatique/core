import { IsString, IsDefined, IsBoolean } from 'class-validator';

// @dynamic
export class ServiceReturnModelDto {
    @IsString()
    @IsDefined()
    type: string;

    @IsBoolean()
    @IsDefined()
    multiple: boolean;
}
