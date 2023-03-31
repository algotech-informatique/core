import { IsDefined, IsInt, Max, Min } from 'class-validator';

// @dynamic
export class SmartTaskDayofMonthDto {
    @IsDefined()
    @IsInt()
    @Min(1)
    @Max(31)
    value: number;
}
