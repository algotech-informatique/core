import { IsDefined, IsString, IsOptional, IsBoolean } from 'class-validator';

export class SmartObjectTreeNavigation {

    @IsDefined()
    @IsString()
    modelKey: string;

    @IsDefined()
    @IsString()
    propertyKey: string;

    @IsOptional()
    @IsString()
    conditionNextPropertyKey?: string;

    @IsOptional()
    conditionNextPropertyValue?: any;

    @IsOptional()
    @IsBoolean()
    conditionNextInclude?: boolean;

    @IsOptional()
    @IsString()
    conditionPropertyKey?: string;

    @IsOptional()
    conditionPropertyValue?: any;

    @IsOptional()
    @IsBoolean()
    conditionInclude?: boolean;

}
