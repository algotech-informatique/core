import { IsDefined, IsArray, IsString, IsOptional, IsBoolean } from 'class-validator';
// @dynamic
export class QuerySearchDto {
    @IsArray()
    @IsDefined()
    so: {
        modelKey: string;
        props: {
            key: string;
            value: string[]
        }[]
    }[];
    @IsArray()
    @IsDefined()
    tags: string[];
    @IsArray()
    @IsDefined()
    layers: string[];
    @IsArray()
    @IsDefined()
    texts: string[];
    @IsArray()
    @IsDefined()
    metadatas: string[];
    @IsString()
    @IsOptional()
    target?: string;
    @IsBoolean()
    @IsOptional()
    exactValue?: boolean;
    @IsBoolean()
    @IsOptional()
    caseSensitive?: boolean;
}
