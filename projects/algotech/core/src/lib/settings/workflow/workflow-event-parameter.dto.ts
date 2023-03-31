import { IsString, IsDefined} from 'class-validator';

// @dynamic
export class WorkflowEventParameterDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    source: string;
}
