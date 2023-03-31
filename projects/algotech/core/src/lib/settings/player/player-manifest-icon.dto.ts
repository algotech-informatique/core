import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

// @dynamic
export class PlayerManifestIconDto {
    @IsString()
    @Expose()
    src: string;

    @IsString()
    @Expose()
    sizes: string;

    @IsString()
    @Expose()
    type: string;

    @IsString()
    @Expose()
    purpose: string;
}
