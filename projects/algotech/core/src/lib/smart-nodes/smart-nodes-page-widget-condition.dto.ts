import { IsDefined, IsOptional, IsString } from 'class-validator';

// @dynamic
export class SnPageWidgetConditionDto {
    @IsDefined()
    @IsString()
    input: string;

    @IsDefined()
    @IsString()
    criteria: string;

    @IsOptional()
    value?: any;
}
