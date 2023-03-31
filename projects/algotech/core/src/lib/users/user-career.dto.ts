import { IsString, IsDefined, IsNotEmpty, IsBoolean, IsOptional, Validate } from 'class-validator';
import { DateStringFormat } from '../elejson/dateValidationConstraint';

export class UserCareerDto {
    @IsBoolean()
    @IsDefined()
    @IsNotEmpty()
    current: boolean;

    @IsString()
    @IsDefined()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY/MM/DDTHH:mm:ssZ'
    })
    beginDate: string;

    @IsString()
    @IsOptional()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY/MM/DDTHH:mm:ssZ'
    })
    endDate?: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    departmentKey: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    position: string;

    @IsString()
    @IsOptional()
    description?: string
}
