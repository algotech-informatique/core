import { IsString, IsNotEmpty, IsDefined, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class DeleteDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    uuid: string;

    @IsOptional()
    @IsArray()
    uuids?: string[];

    @IsOptional()
    @IsBoolean()
    real?: boolean;

    @IsOptional()
    @IsBoolean()
    empty?: boolean;
}
