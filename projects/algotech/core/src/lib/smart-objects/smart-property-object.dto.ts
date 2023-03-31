import { IsString, IsDefined, IsOptional } from 'class-validator';

export class SmartPropertyObjectDto {
    @IsString()
    @IsDefined()
    key: string;

    @IsOptional()
    value: any;
}
