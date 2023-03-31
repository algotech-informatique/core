import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDefined, ValidateNested } from 'class-validator';
import { BaseModel } from '../base';
import { GroupApplicationDto } from './group-application.dto';

// @dynamic

export class GroupDto extends BaseModel {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    key: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsString()
    description: string;

    @ValidateNested()
    @Type(() => GroupApplicationDto)
    application: GroupApplicationDto;

}
