import { IsString, IsNotEmpty, IsDefined } from 'class-validator';
import { BaseModel } from '../../base';

export class EleJsonNormeDto extends BaseModel {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;
}
