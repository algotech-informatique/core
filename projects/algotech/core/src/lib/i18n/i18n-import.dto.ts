import { IsNumber } from "class-validator";

export class I18nImportResultDto {
    @IsNumber()
    ignoreRows: number;

    @IsNumber()
    unknownRows: number;
    
    @IsNumber()
    updatedRows: number;
}