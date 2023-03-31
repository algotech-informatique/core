import { IsUUID, IsDefined, IsString, IsOptional } from 'class-validator';
import { LangDto } from '../lang';

export class SnConnectorDto {

    @IsUUID()
    @IsDefined()
    id: string;

    @IsString()
    @IsOptional()
    key?: string;

    @IsOptional()
    displayName?: LangDto[] | string;

    @IsString()
    @IsOptional()
    direction?: 'in' | 'out';

    @IsString()
    @IsOptional()
    toward?: string;

    @IsOptional()
    custom?: any;
}
