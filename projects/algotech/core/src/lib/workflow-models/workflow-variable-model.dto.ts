import { IsString, IsDefined, IsBoolean, IsOptional, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

// @dynamic
export class WorkflowVariableModelDto {
    @IsUUID()
    @IsDefined()
    @Expose()
    uuid: string;

    @IsString()
    @IsDefined()
    @Expose()
    key: string;

    @IsString()
    @IsDefined()
    @Expose()
    type: string;

    @IsBoolean()
    @IsDefined()
    @Expose()
    multiple: boolean;

    @IsBoolean()
    @IsOptional()
    @Expose()
    required?: boolean;

    @IsBoolean()
    @IsOptional()
    deprecated?: boolean;

    @IsBoolean()
    @IsOptional()
    allowEmpty?: boolean;

    @IsString()
    @IsOptional()
    use?: 'header' | 'url-segment' | 'query-parameter' | 'body' | 'formData';

    @IsString()
    @IsOptional()
    description?: string;
}
