import { IsOptional } from 'class-validator';

export class ATSkillsActiveDto {

    @IsOptional()
    atGeolocation?: boolean;

    @IsOptional()
    atDocument?: boolean;

    @IsOptional()
    atSignature?: boolean;

    @IsOptional()
    atTag?: boolean;

    @IsOptional()
    atMagnet?: boolean;
}
