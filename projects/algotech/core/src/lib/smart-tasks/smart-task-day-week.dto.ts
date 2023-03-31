import { IsDefined, IsInt, Max, Min } from 'class-validator';

// @dynamic
export class SmartTaskDayofWeekDto {
    @IsDefined()
    @IsInt()
    @Min(0)
    @Max(6)
    value: number;
}
