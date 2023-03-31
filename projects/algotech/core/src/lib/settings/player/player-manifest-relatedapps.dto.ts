import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

// @dynamic
export class PlayerManifestRelatedAppsDto {
    @IsString()
    @Expose()
    platform: string;

    @IsString()
    @Expose()
    url: string;
}
