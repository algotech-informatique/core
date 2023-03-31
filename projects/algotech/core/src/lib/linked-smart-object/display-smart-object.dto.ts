import { SmartObjectDto } from '../smart-objects';

export interface DisplayObjectDto {
    uuid: string;
    display: string;
    smartObject: SmartObjectDto;
}
