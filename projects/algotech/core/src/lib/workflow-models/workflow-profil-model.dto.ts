import { IsString, IsDefined, IsUUID, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class WorkflowProfilModelDto {
    @IsUUID()
    @IsDefined()
    @Expose()
    uuid: string;

    @IsString()
    @IsDefined()
    @Expose()
    name: string;

    @IsOptional()
    @IsDefined()
    color?: string;
}
