import { IsDefined, IsInt, Max, Min } from 'class-validator';

// @dynamic
export class SmartTaskMonthOfYearDto {
    @IsDefined()
    @IsInt()
    @Min(0)
    @Max(11)
    value: number;
}
