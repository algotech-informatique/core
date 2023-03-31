import { IsDefined, IsBoolean } from 'class-validator';

export class AuditSettingsDto {
    @IsDefined()
    @IsBoolean()
    activated: boolean;

    @IsDefined()
    @IsBoolean()
    traceOriginal: boolean;
}
