import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsString, ValidateNested } from 'class-validator';
import { WorkflowApiAuthDto } from './workflow-api-auth.dto';
import { WorkflowApiResultDto } from './workflow-api-result.dto';

// @dynamic
export class WorkflowApiModelDto {
    @IsString()
    @IsDefined()
    route: string;

    @IsString()
    @IsDefined()
    type: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowApiAuthDto)
    auth: WorkflowApiAuthDto;

    @IsString()
    @IsDefined()
    description: string;

    @IsString()
    @IsDefined()
    summary: string;

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => WorkflowApiResultDto)
    result: WorkflowApiResultDto[];
}
