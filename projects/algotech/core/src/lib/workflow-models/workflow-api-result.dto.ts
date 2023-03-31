import { IsBoolean, IsDefined, IsString } from 'class-validator';

export class WorkflowApiResultDto {
    @IsString()
    @IsDefined()
    code: string;

    @IsString()
    @IsDefined()
    description: string;

    @IsString()
    @IsDefined()
    content: string;

    @IsBoolean()
    @IsDefined()
    multiple: boolean;

    @IsString()
    @IsDefined()
    type: string;
}
