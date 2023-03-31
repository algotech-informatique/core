import { BaseModel } from '../base/base.model';
import { IsString, IsNumber, IsDefined } from 'class-validator';

export class SmartModelConfig extends BaseModel {

    @IsString()
    @IsDefined()
    domainKey: string;

    @IsString()
    @IsDefined()
    modelKey: string;

    @IsNumber()
    @IsDefined()
    x: number;

    @IsNumber()
    @IsDefined()
    y: number;
}
