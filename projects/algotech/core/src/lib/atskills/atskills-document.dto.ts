import { IsArray } from 'class-validator';

// @dynamic
export class ATDocumentDto {

    @IsArray()
    documents: string[];

}
