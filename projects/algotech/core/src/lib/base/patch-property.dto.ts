import { IsString, IsNotEmpty, IsDefined, IsOptional } from 'class-validator';

export class PatchPropertyDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    op: 'add' | 'replace' | 'move' | 'test' | 'remove' | 'copy';

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    path: string;

    @IsOptional()
    value?: any;
  }
