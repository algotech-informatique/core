import { IsNotEmpty, IsDefined, IsArray } from 'class-validator';
import { LangDto } from '../../lang';


// @dynamic
export class PlanLayersIframeEventSettingsDto {

    @IsNotEmpty()
    @IsArray()
    displayName: LangDto[];

    @IsDefined()
    @IsArray()
    triggers: {
        path: string;
        value: string
    }[];

    @IsDefined()
    behaviors: {
        details: {
            from: 'smartobject' | 'smartflow';
            smartobject?: {
                smartPropertyKey: string;
                valueFromPath: string;
            };
            smartflow?: {
                uuid: string;
                key: string;
                variables: Array<{
                    key: string;
                    valueFromPath: string;
                }>;
            };
        }
    };
}
