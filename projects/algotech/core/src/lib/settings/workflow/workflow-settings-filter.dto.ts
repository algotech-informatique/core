import { IsString, IsDefined } from 'class-validator';

// @dynamic
export class WorkflowSettingsFilterDto {
    @IsDefined()
    @IsString()
    filterKey: string;

    @IsDefined()
    @IsString()
    filterValue: any;
}
