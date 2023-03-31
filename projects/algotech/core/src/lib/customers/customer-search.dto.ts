import { IsDefined, IsArray, IsOptional, IsBoolean } from 'class-validator';

// @dynamic
export class CustomerSearchDto {

    @IsOptional()
    @IsBoolean()
    all?: boolean;

    @IsOptional()
    @IsDefined()
    @IsArray()
    customerKey?: string[];

    name?: string[];

}
