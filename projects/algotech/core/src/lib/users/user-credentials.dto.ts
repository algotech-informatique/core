import { IsString, IsDefined, IsNotEmpty, IsOptional, Validate, IsArray, IsNumber, IsBoolean } from 'class-validator';
import { DateStringFormat } from '../elejson/dateValidationConstraint';

// @dynamic
export class CredentialsDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    login: string;

    @IsDefined()
    @IsNotEmpty()
    credentialsType: 'password' | 'oauth1' | 'oauth2';

    @IsString()
    @IsOptional()
    accessToken?: string;

    @IsString()
    @IsOptional()
    idToken?: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    creationDate: string;

    @IsOptional()
    @IsBoolean()
    blockedAccount?: boolean;
}
