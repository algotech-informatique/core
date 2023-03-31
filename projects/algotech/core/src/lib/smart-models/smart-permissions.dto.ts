import { IsDefined, IsArray } from 'class-validator';

export class SmartPermissionsDto {

    @IsDefined()
    @IsArray()
    R: string[]; // ['Consultant']

    @IsDefined()
    @IsArray()
    RW: string[];
}
