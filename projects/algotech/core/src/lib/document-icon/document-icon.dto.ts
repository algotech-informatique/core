import { IsString, IsNotEmpty, IsDefined, IsArray } from 'class-validator';
import { BaseModel } from '../base';


// @dynamic
export class DocumentIconDto extends BaseModel {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    key: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    color: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    icon: string;

    @IsArray()
    @IsDefined()
    extensions: Array<string>;
}
