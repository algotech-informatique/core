import { IsDefined, IsUUID, IsBoolean, IsOptional } from 'class-validator';

// @dynamic
export class WorkflowParticipantDto {
    @IsDefined()
    user: string;

    @IsUUID()
    @IsOptional()
    profil?: string;

    @IsBoolean()
    @IsDefined()
    active: boolean;
}
