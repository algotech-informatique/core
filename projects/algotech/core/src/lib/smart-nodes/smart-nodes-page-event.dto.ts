
import { Type } from 'class-transformer';
import { IsDefined, IsString, IsOptional, IsUUID, IsArray, ValidateNested } from 'class-validator';
import { SnPageEventPipeDto } from './smart-nodes-page-event-pipe.dto';

// @dynamic
export class SnPageEventDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsString()
    @IsDefined()
    eventKey: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageEventPipeDto)
    pipe: SnPageEventPipeDto[];

    @IsOptional()
    custom?: any;
}
