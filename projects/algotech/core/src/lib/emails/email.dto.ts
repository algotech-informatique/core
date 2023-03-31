import { IsString, IsDefined, IsArray, IsOptional, IsBoolean } from 'class-validator';

// @dynamic
export class EMailDto {
    @IsArray()
    @IsDefined()
    to: Array<string>;

    @IsString()
    @IsDefined()
    subject: string;

    @IsString()
    content: string;

    @IsArray()
    @IsDefined()
    linkedFiles: Array<string>;

    @IsBoolean()
    @IsOptional()
    html?: boolean;

}
