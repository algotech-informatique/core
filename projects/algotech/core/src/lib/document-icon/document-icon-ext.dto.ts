import { IsString, IsNotEmpty, IsDefined } from 'class-validator';
import { BaseModel } from '../base';

// @dynamic
export class DocumentIconExtensionDto extends BaseModel {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    extension: string;

}
