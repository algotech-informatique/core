import { IsOptional, IsArray } from 'class-validator';

// @dynamic
export class ProfilsSearchDto {

    @IsOptional()
    @IsArray()
    profil?: string[];

    @IsOptional()
    @IsArray()
    group?: string[];

    @IsOptional()
    @IsArray()
    login?: string[];
}