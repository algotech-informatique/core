import { IsDefined, IsString, IsOptional, IsUUID } from 'class-validator';

// @dynamic
export class DocumentMetadatasDto {
    @IsDefined()
    @IsString()
    key: string;

    @IsDefined()
    @IsString()
    value: string;
}
