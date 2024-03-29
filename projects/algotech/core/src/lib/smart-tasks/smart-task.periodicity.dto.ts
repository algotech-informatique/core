import { DateRangeDto } from '../base';
import { IsDefined, IsString, IsBoolean, ValidateNested, IsArray, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { SmartTaskRepetitionDto } from './smart-task-repetition.dto';
import { SmartTaskHourOfDayDto } from './smart-task-hour-day.dto';

// @dynamic
export class SmartTaskPeriodicityDto {

    // repeat every x seconds/minutes/hours/days/months beginning from start Date
    @IsOptional()
    repeatEvery?: SmartTaskRepetitionDto[];

    // permet de choisir si on veux répeter le process à une ou plusieurs heures spécifique du jour (tableau de valeur de  1-7)
    @IsOptional()
    @IsArray()
    @ValidateNested()
    @Type(() => SmartTaskHourOfDayDto)
    hoursOfTheDay?: SmartTaskHourOfDayDto[];

    // permet de choisir si on veux répeter le process un  ou plusieurs jours spécifique de la semaine (tableau de valeur de  1-7)
    @IsOptional()
    @IsArray()
    daysOftheWeek?: number[];

    // permet de choisir si on veux répeter le process un  ou plusieurs jours spécifique du mois ( ableau de valeur 1- 31)
    @IsOptional()
    @IsArray()
    daysOftheMonth?: number[];

    @IsOptional()
    @IsArray()
    monthsOftheYear?: number[];

    @IsDefined()
    @IsBoolean()
    skipImmediate: boolean;

    @IsDefined()
    @ValidateNested()
    @Type(() => DateRangeDto)
    dateRange: DateRangeDto;

    @IsDefined()
    @IsString()
    timeZone: string;
}
