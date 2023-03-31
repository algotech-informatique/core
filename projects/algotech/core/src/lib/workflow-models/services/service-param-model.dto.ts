import { IsString, IsDefined } from 'class-validator';

// @dynamic
export class ServiceParamModelDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsDefined()
    value: any;

    @IsDefined()
    type: 'url-segment' | 'request-body' | 'request-body-json' | 'request-body-uuid';
}
