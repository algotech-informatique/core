import { Type } from 'class-transformer';
import { IsArray, IsDefined, ValidateNested } from 'class-validator';
import { BaseModel } from '../base';
import { GroupApplicationDefaultDto } from './group-application-default.dto';

// @dynamic

export class GroupApplicationDto extends BaseModel {

    @IsArray()
    @IsDefined()
    authorized: string[];

    @ValidateNested()
    @Type(() => GroupApplicationDefaultDto)
    default: GroupApplicationDefaultDto;

}