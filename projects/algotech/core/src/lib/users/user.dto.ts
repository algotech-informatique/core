import { ValidateNested, IsString, IsEmail, IsBoolean, IsUUID, IsUrl, IsArray, IsOptional, IsNotEmpty, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { CredentialsDto } from './user-credentials.dto';
import { UserCareerDto } from './user-career.dto';
import { UserPhoneDto } from './user-phone.dto';
import { UserSkillDto } from './user-skill.dto';
import { UserCommunityDto } from './user-community.dto';
import { BaseModel } from '../base';
import { UserFavoritesDto } from './user-favorites.dto';

// @dynamic
export class UserDto extends BaseModel {
    @IsString()
    @IsDefined()
    customerKey: string;
        
    @IsString()
    @IsDefined()
    preferedLang: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsDefined()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    lastName: string;

    @IsArray()
    groups: string[];

    @IsBoolean()
    @IsOptional()
    enabled?: Boolean;

    @IsUUID()
    @IsOptional()
    customerUuid?: string;

    @IsOptional()
    pictureUrl?: string;

    @IsArray()
    @IsDefined()
    following: string[];

    @ValidateNested()
    @Type(() => UserFavoritesDto)
    favorites: UserFavoritesDto;

    @IsString()
    @IsOptional()
    mobileToken?: string
}
