import { LangDto } from '../../lang';
import { IsString, IsDefined, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { WorkflowEventParameterDto } from './workflow-event-parameter.dto';
import { Type } from 'class-transformer';

// @dynamic
export class WorkflowEventDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    app: string;

    @IsBoolean()
    @IsDefined()
    system: boolean;

    @IsArray()
    @ValidateNested()
    @Type(() => LangDto)
    @IsDefined()
    displayName: LangDto[];

    @IsArray()
    @ValidateNested()
    @Type(() => WorkflowEventParameterDto)
    @IsDefined()
    parameters: WorkflowEventParameterDto[];
}
