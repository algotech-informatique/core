import { BaseModel } from '../base';
import { IsDefined, IsString, IsOptional } from 'class-validator';
import { ProcessMonitoringType } from './process-monitoring.type';
import { ProcessMonitoringState } from './process-monitoring.state';


// @dynamic
export class ProcessMonitoringDto extends BaseModel {

    @IsDefined()
    @IsString()
    uuid: string;

    @IsDefined()
    @IsString()
    processType: ProcessMonitoringType;

    @IsDefined()
    @IsString()
    processState: ProcessMonitoringState;

    @IsOptional()
    current?: number;

    @IsOptional()
    total?: number;

    @IsOptional()
    result?: any;
}
