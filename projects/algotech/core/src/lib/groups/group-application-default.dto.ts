import { IsString } from 'class-validator';
import { BaseModel } from '../base';

export class GroupApplicationDefaultDto extends BaseModel {

    @IsString()
    mobile: string;

    @IsString()
    web: string;

}