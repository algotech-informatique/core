import { SnElementDto } from './smart-nodes-element.dto';
import { IsDefined, IsString } from 'class-validator';

export class SnGroupDto extends SnElementDto {

    @IsDefined()
    @IsString()
    color: string;
}

