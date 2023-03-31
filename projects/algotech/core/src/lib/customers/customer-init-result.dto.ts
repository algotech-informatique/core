import { IsString, IsNotEmpty, IsDefined } from 'class-validator';

// @dynamic
export class CustomerInitResultDto {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    key: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    value: 'ok' | 'ko';

    query?: string;

    data?: any;

}
