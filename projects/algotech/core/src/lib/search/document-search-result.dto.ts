import { DocumentDto } from '../documents';

export class DocumentSearchResultDto extends DocumentDto {
    highlights: string[];
}
