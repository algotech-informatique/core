import { IsString, IsDefined, IsOptional } from 'class-validator';

// @dynamic
export class WorkflowSettingsSecurityGroupsDto {
    @IsOptional()
    @IsString()
    profil?: string;

    @IsString()
    group: string;

    @IsString()
    login: string;
}
