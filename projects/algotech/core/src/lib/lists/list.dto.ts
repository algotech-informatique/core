import { IsString, IsDefined, IsArray, IsNotEmpty } from 'class-validator';
import { BaseModel } from '../base';

// @dynamic
export class ListDto extends BaseModel {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    key: string;

    @IsArray()
    @IsDefined()
    value: string[];
}
