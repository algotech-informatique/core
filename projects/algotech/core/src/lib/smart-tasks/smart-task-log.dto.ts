import { BaseModel } from '../base';
import { IsDefined, IsString, IsOptional } from 'class-validator';

// @dynamic
export class SmartTaskLogDto extends BaseModel {

    @IsDefined()
    @IsString()
    smartTaskUuid: string;

    @IsDefined()
    @IsString()
    runAt: string;

    @IsDefined()
    @IsString()
    finishAt: string;

    @IsDefined()
    @IsString()
    status: 'success' | 'failure' | 'start';

    @IsOptional()
    @IsString()
    failureMsg?: string;
}
