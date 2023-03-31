import { ValidateNested, IsArray, IsNotEmpty, IsDefined} from 'class-validator';
import { Type, Expose } from 'class-transformer';
import { BaseModel } from '../base';
import { PlanSettingsDto } from './plan/plan-settings.dto';
import { WorkflowSettingsDto } from './workflow/workflow-settings.dto';
import { AgendaTypeDto } from './agenda/agenda.dto';
import { AuditSettingsDto } from './audit';
import { DocumentsSettingsDto } from './documents';
import { ThemeDto } from './theme/theme.dto';
import { PlayerManifestDto } from './player/player-manifest.dto';

// @dynamic
export class SettingsDto extends BaseModel {

    @IsDefined()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PlanSettingsDto)
    plan: PlanSettingsDto;

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowSettingsDto)
    workflows: WorkflowSettingsDto[];

    @IsDefined()
    @IsArray()
    @ValidateNested()
    @Type(() => AgendaTypeDto)
    agenda: AgendaTypeDto[];

    @IsDefined()
    @ValidateNested()
    @Type(() => AuditSettingsDto)
    audit: AuditSettingsDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => DocumentsSettingsDto)
    documents: DocumentsSettingsDto;

    @IsDefined()
    @ValidateNested()
    @Expose({groups: ['theme']})
    @Type(() => ThemeDto)
    theme: ThemeDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => PlayerManifestDto)
    player: PlayerManifestDto;
}
