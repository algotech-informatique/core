import { SnElementDto } from './smart-nodes-element.dto';
import { IsString, IsOptional } from 'class-validator';

export class SnBoxDto extends SnElementDto {

    @IsOptional()
    @IsString()
    parentId?: string;

}

