import { IsArray, IsDefined, IsOptional, IsString } from "class-validator";

// @dynamic
export class SearchSOFilterValueDto { 
    @IsOptional()
    @IsArray()
    models?: string[];

    @IsDefined()
    value: any;

    @IsOptional()
    secondValue?:any;

    @IsDefined()
    @IsString()
    type: string;

    @IsDefined()
    @IsString()
    criteria: 'startsWith' | 'notStartsWith' | 'endWith' | 'contains' | 'equals' | 'different' | 'gt' | 'lt' | 'gte' | 'lte' | 'isNull' | 'in' | 'between' | 'exists';
  }
  