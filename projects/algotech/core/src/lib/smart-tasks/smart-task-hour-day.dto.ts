import { IsDefined, IsInt, Max, Min } from 'class-validator';

// @dynamic
export class SmartTaskHourOfDayDto {
    @IsDefined()
    @IsInt()
    @Min(0)
    @Max(23)
    value: number;
}
