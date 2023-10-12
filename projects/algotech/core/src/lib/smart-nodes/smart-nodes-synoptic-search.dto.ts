import { IsString, IsDefined, IsArray } from 'class-validator';
import { LangDto } from '../lang';

// @dynamic
export class SnSynoticSearchDto {

    @IsString()
    @IsDefined()
    key: string;

    @IsString()
    @IsDefined()
    snModelUuid: string;

    @IsString()
    @IsDefined()
    snVersionUuid: string;

    @IsString()
    @IsDefined()
    snViewUuid: string;

    @IsString()
    @IsDefined()
    elementUuid: string;

    @IsDefined()
    displayName: LangDto[] | string;
    
    @IsString()
    @IsDefined()
    type: 'page' | 'widget' | 'node' | 'view' | 'app' | 'box' | 'group' | 'comment'| 'report';


    @IsArray()
    @IsDefined()
    connectedTo: string[];

}
