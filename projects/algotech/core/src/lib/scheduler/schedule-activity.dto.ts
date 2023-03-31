import { IsDefined, IsUUID, IsOptional, Validate, IsString, IsNotEmpty } from 'class-validator';
import { DateStringFormat } from '../elejson/dateValidationConstraint';

// @dynamic
export class ScheduleActivityDto {

    @IsOptional()
    @IsString()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    beginRealDate: string;

    @IsOptional()
    @IsString()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    endRealDate: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    workflowModelKey: string;

    @IsDefined()
    @IsNotEmpty()
    @IsUUID()
    workflowInstanceUuid: string;
}
