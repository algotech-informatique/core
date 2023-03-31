import { IsString, IsDefined, IsNotEmpty, Validate } from 'class-validator';
import { DateStringFormat } from '../elejson/dateValidationConstraint';

export class UserCommunityDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    communityKey: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Validate(DateStringFormat, {
        message: 'Date must be YYYY/MM/DDTHH:mm:ssZ'
    })
    startDate: string;
}
