import { SmartObjectDto } from '../smart-objects';
import { TagSearchResultDto } from './tag-search-result.dto';
import { SearchResultDto } from './search-result.dto';
import { DocRecommendationDto } from './doc-recommendation.dto';

export class QuerySearchResultDto {
    header: {
        type: 'so' | 'tag' | 'file' | 'layer';
        name: string;
        count: number | '*';
    };
    values: SmartObjectDto[] | SearchResultDto[] | TagSearchResultDto[];
    docRecommendation: DocRecommendationDto[];
}
