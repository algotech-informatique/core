import { IsDefined, IsArray, IsOptional, IsBoolean } from 'class-validator';

// @dynamic
export class UserSearchDto {

    @IsOptional()
    @IsBoolean()
    all?: boolean;

    @IsOptional()
    @IsDefined()
    @IsArray()
    customerKey?: string[];

    @IsOptional()
    @IsDefined()
    @IsArray()
    preferedLang?: string[];

    @IsOptional()
    @IsDefined()
    @IsArray()
    email?: string[];

    @IsOptional()
    @IsDefined()
    @IsArray()
    firstName?: string[];

    @IsOptional()
    @IsDefined()
    @IsArray()
    lastName?: string[];

}
