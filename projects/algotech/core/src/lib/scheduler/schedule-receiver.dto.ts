import { IsOptional, IsUUID, IsDefined, IsString, IsNotEmpty } from 'class-validator';

// @dynamic
export class ScheduleReceiverDto {

    @IsOptional()
    @IsUUID()
    userUuid: string;

    @IsOptional()
    @IsUUID()
    groupUuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    permission: 'R' | 'RW';
}
