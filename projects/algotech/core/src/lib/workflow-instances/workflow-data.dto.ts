import { IsString, IsDefined, IsOptional } from 'class-validator';

export class WorkflowDataDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsOptional()
    value: any;

    @IsString()
    @IsDefined()
    type: string;
}
