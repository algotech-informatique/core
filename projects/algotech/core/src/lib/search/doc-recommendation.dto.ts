import { SmartObjectDto } from '../smart-objects';

export class DocRecommendationDto {
    uuid:string;
    name: string;
    ext: string;
    smartObjects: SmartObjectDto[];
}
