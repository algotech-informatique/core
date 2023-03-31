import { SmartObjectDto } from '../smart-objects';
import { DocumentSearchResultDto } from './document-search-result.dto';

export interface SearchResultDto {
    smartObjects: SmartObjectDto[];
    file: DocumentSearchResultDto;
}
