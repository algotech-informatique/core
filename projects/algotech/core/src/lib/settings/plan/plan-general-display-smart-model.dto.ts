import { IsString, IsNotEmpty, IsDefined } from 'class-validator';

export class PlanGeneralDisplaySmartModelDto {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    smUuid: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    smFormated: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    smModel: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    smField: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    color: string;
}
