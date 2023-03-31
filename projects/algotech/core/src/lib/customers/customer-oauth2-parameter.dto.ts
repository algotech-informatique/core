import { IsString, IsNotEmpty, IsDefined, IsArray} from 'class-validator';

import { BaseModel } from '../base';

// @dynamic
export class CustomerOAuth2ParameterDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    key: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    value: string;
}
