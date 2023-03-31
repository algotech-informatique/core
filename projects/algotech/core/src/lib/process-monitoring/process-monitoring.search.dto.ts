import { BaseModel } from '../base';
import { IsArray, IsOptional } from 'class-validator';


// @dynamic
export class ProcessMonitoringSearchDto extends BaseModel {

    @IsOptional()
    @IsArray()
    byUuids?: string[];

    @IsOptional()
    byProcessState?: 'inProgress' | 'succeeded' | 'error' | 'canceled';
}
