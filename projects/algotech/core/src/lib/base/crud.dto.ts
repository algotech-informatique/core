import { IsString, IsNotEmpty, IsDefined, IsOptional } from 'class-validator';
import { PatchPropertyDto } from './patch-property.dto';
import { SmartObjectDto } from '../smart-objects';

export class CrudDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    op: 'add' | 'patch' | 'remove';

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    collection: string;

    @IsString()
    @IsOptional()
    key?: string;

    @IsOptional()
    value?: any | SmartObjectDto | PatchPropertyDto[];
  }
