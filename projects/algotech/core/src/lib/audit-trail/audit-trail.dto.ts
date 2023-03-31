import { IsString, IsOptional, IsNumber, IsDefined, IsNotEmpty } from 'class-validator';

export class AuditLogDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    eventId: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    eventActionCode: 'C' |
        'R' |
        'U' |
        'D' |
        'E';

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    eventDate: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    httpStatusCode: number;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    customerKey: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    networkAccessPoint: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    objectUuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    objectTypeCode: 'user' |
        'group' |
        'customer' |
        'settings' |
        'document' |
        'smart-object' |
        'smart-model' |
        'workflow-model' |
        'workflow-instance' |
        'generic-list' |
        'tags' |
        'notifications' |
        'schedules';

    @IsOptional()
    @IsString()
    objectModelKey: string;
}
