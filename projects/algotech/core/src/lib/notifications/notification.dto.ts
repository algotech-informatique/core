import { ValidateNested, IsString, IsOptional, IsDefined, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../base';
import { NotificationStateDto } from './notification.state.dto';
import { NotificationActionDto } from './notification.action.dto';

// @dynamic
export class NotificationDto extends BaseModel {
    @IsString()
    @IsDefined()
    title: string;

    @IsString()
    @IsDefined()
    content: string;

    @IsString()
    @IsOptional()
    additionalInformation?: string;

    @IsString()
    @IsDefined()
    icon: string;

    @IsString()
    @IsDefined()
    author: string;

    @IsDefined()
    @Type(() => Date)
    date: string;

    @IsString()
    @IsOptional()
    comment?: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => NotificationActionDto)
    action: NotificationActionDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => NotificationStateDto)
    state: NotificationStateDto;

    @IsArray()
    @IsOptional()
    channels?: string[];
}
