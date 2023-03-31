import { IsString, IsDefined, IsNotEmpty } from 'class-validator';
import { BaseModel } from '../base';

// @dynamic
export class IconDto extends BaseModel {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsDefined()
    tags: string;
}
