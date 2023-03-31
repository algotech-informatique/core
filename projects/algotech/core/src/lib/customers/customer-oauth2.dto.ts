import { IsString, IsNotEmpty, IsDefined, IsArray} from 'class-validator';

import { BaseModel } from '../base';
import { CustomerOAuth2ParameterDto } from './customer-oauth2-parameter.dto';

// @dynamic
export class CustomerOAuth2Dto extends BaseModel {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    authorizeURL: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    accessTokenURL: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    userInfoURL: string;

    @IsDefined()
    authorizeURLParameters: CustomerOAuth2ParameterDto[];

    @IsDefined()
    accessTokenURLParameters: CustomerOAuth2ParameterDto[];

    @IsDefined()
    userInfoURLParameters: CustomerOAuth2ParameterDto[];

    @IsArray()
    @IsNotEmpty()
    @IsDefined()
    defaultGroups: Array<string>;
}
