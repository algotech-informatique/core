import { SmartPropertyModelDto, SmartModelDto } from '../smart-models';
import { DisplayObjectDto } from './display-smart-object.dto';

export interface LinkedSmartObjectDto {
    propertyKey: string;
    isGeolocalisable: boolean;
    isMultiple: boolean;
    isComposition: boolean;
    property: SmartPropertyModelDto;
    linkedModel: SmartModelDto;
    values: DisplayObjectDto[];
}
