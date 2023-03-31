import { IsString, IsDefined } from 'class-validator';

export class WorkflowExpressionDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsDefined()
    value: any;

    @IsString()
    @IsDefined()
    type: string;
}
