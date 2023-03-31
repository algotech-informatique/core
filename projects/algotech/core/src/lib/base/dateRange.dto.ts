import { Validate, IsOptional } from 'class-validator';
import { DateStringFormat } from '../elejson/dateValidationConstraint';

// @dynamic
export class DateRangeDto {

    @IsOptional()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    start?: string;

    @IsOptional()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY-MM-DDTHH:mm:ssZ'
    })
    end?;
}
