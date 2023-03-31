import { IsString, IsDefined, IsBoolean, IsOptional, IsUUID, IsArray } from 'class-validator';

// @dynamic
export class TaskTransitionDataModelDto {
    @IsUUID()
    @IsDefined()
    uuid: string;

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    type: string;

    @IsBoolean()
    @IsDefined()
    multiple: boolean;

    @IsArray()
    @IsOptional()
    placeToSave?: string[];
}
