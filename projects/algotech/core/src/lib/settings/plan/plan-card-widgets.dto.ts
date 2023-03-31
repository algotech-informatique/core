import { SnPageBoxDto } from './../../smart-nodes/smart-nodes-page-box.dto';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

// @dynamic
export class PlanCardWidgetsDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    type: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => SnPageBoxDto)
    box: SnPageBoxDto;

    @IsDefined()
    @IsNotEmpty()
    custom: any;

    @IsDefined()
    @IsNotEmpty()
    css: any;
}
