import { Expose, Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { PlayerManifestIconDto } from './player-manifest-icon.dto';
import { PlayerManifestRelatedAppsDto } from './player-manifest-relatedapps.dto';

// @dynamic
export class PlayerManifestDto {
    @IsString()
    @Expose()
    name: string;

    @IsString()
    @Expose()
    short_name: string;

    @IsString()
    @Expose()
    gcm_sender_id: string;

    @IsString()
    @Expose()
    theme_color: string;

    @IsString()
    @Expose()
    background_color: string;

    @IsString()
    @Expose()
    orientation: string;

    @IsString()
    @Expose()
    display: string;

    @IsString()
    @Expose()
    scope: string;

    @IsString()
    @Expose()
    id: string;

    @IsString()
    @Expose()
    start_url: string;

    @IsArray()
    @Expose()
    @ValidateNested()
    @Type(() => PlayerManifestIconDto)
    icons: PlayerManifestIconDto[];

    @IsArray()
    @Expose()
    @ValidateNested()
    @Type(() => PlayerManifestRelatedAppsDto)
    related_applications: PlayerManifestRelatedAppsDto[];
}
