import { PairDto } from '../pair';
import { IsString, IsDefined, IsArray, IsBoolean, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { SmartLinkLoginDto } from './smart-link-login.dto';
import { Type } from 'class-transformer';

// @dynamic
export class SmartLinkDto {
    @IsString()
    @IsDefined()
    type: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsArray()
    @IsDefined()
    sources: Array<PairDto>;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    backupType: 'ASAP' | 'END';

    @IsBoolean()
    @IsDefined()
    unique: boolean;

    @IsString()
    @IsDefined()
    duration: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    authentication: 'manual' | 'automatic';

    @IsOptional()
    @ValidateNested()
    @Type(() => SmartLinkLoginDto)
    automaticLogin?: SmartLinkLoginDto;
}
