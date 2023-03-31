import { ValidateNested, IsArray, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';
import { DocumentsMetaDatasSettingsDto } from './documents-metadatas-settings.dto';

// @dynamic
export class DocumentsSettingsDto {

    @IsArray()
    @IsDefined()
    @ValidateNested()
    @Type(() => DocumentsMetaDatasSettingsDto)
    metadatas: DocumentsMetaDatasSettingsDto[];

}

